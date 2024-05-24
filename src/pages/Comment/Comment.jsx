import GuestFavorite from '../../components/GuestFavorite/GuestFavorite.jsx'
import ReviewMeta from '../../components/ReviewMeta/ReviewMeta.jsx'
import Review from '../../components/Review/Review.jsx'
import { useState, useEffect } from 'react'

const Comment = () => {
  const [reviewData, setReviewData] = useState([])

  useEffect(() => {
    fetch('/json/Review.json')
      .then(response => response.json())
      .then(data => {
        setReviewData(processReviewData(data))
      })
      .catch(error => console.error('Error fetching ReviewData.json:', error))
      .finally(console.log(reviewData))
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
    <div className='px-20'>
      <GuestFavorite />
      <ReviewMeta />
      <Review reviewData={reviewData} />
    </div>
  )
}

export default Comment
