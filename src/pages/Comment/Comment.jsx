import GuestFavorite from '../../components/GuestFavorite/GuestFavorite.jsx'
import ReviewMeta from '../../components/ReviewMeta/ReviewMeta.jsx'
import Review from '../../components/Review/Review.jsx'
import ReviewInform from '../../components/ReivewInform/ReviewInform.jsx'
import { useState, useEffect } from 'react'

const generateReviewMetaData = data => {
  // 카테고리별 합산값을 저장할 객체
  const categoryTotals = {
    Cleanliness: 0,
    Accuracy: 0,
    CheckIn: 0,
    Communication: 0,
    Location: 0,
    Value: 0,
  }

  // 별점별 갯수를 저장할 객체
  const starCounts = {
    5: 0,
    4: 0,
    3: 0,
    2: 0,
    1: 0,
  }

  // 데이터를 반복하여 각 카테고리별 합산값과 별점별 갯수를 계산
  data.forEach(item => {
    Object.entries(item.Ratings).forEach(([category, rating]) => {
      categoryTotals[category] += rating
    })
  })

  // 카테고리별 평균값 계산
  const categoryAverages = {}
  Object.entries(categoryTotals).forEach(([category, total]) => {
    categoryAverages[category] = parseFloat((total / data.length).toFixed(1))
  })

  // 별점별 퍼센트 비율 계산
  const totalReviews = data.length
  data.forEach(review => {
    const rating = Math.round(
      (review.Ratings.Cleanliness +
        review.Ratings.Accuracy +
        review.Ratings.CheckIn +
        review.Ratings.Communication +
        review.Ratings.Location +
        review.Ratings.Value) /
        6,
    )
    starCounts[rating]++
  })
  const starPercentages = Object.entries(starCounts).map(([stars, count]) => ({
    stars: parseInt(stars),
    percentage: totalReviews > 0 ? parseFloat(((count / totalReviews) * 100).toFixed(1)) : 0,
  }))

  // ReviewMetaData 객체 구성
  const reviewMetaData = {
    MetaData: Object.entries(categoryAverages).map(([category, value]) => ({
      category,
      value,
    })),
    ratings: starPercentages,
  }

  return reviewMetaData
}

const Comment = () => {
  const [reviewData, setReviewData] = useState([])
  const [reviewMetaData, setReviewMetaData] = useState([])

  useEffect(() => {
    fetch('/json/Review.json')
      .then(response => response.json())
      .then(data => {
        setReviewData(processReviewData(data))
        setReviewMetaData(generateReviewMetaData(data))
      })
      .catch(error => console.error('Error fetching ReviewData.json:', error))
  }, [])

  // ratings 평균 값을 내주는 함수
  const calculateAverageRating = ratings => {
    const totalScore = Object.values(ratings).reduce((acc, curr) => acc + curr, 0)
    const numberOfCategories = Object.keys(ratings).length
    return (totalScore / numberOfCategories).toFixed(1)
  }

  // rating 객체로 가공하는 함수.
  const processReviewData = data => {
    return data.map(item => {
      const averageRating = calculateAverageRating(item.Ratings)
      return {
        ...item.review,
        rating: parseFloat(averageRating), // 소수점 한 자리까지 표시
      }
    })
  }

  return (
    <div className='px-[46px]'>
      <GuestFavorite />
      <ReviewMeta reviewMetaData={reviewMetaData} />
      <Review reviewData={reviewData} />
      <ReviewInform />
    </div>
  )
}

export default Comment
