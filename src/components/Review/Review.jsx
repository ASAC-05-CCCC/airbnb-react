import ReviewHeader from './ReviewHeader'
import ReviewContent from './ReviewContent'
import ReviewMoreButton from './ReviewMoreButton'
import ReviewData from '../../../public/json/ReviewData.json'
import { useState } from 'react'

const Review = () => {
  const [moreReview, setMoreReview] = useState(false)
  return (
    <div>
      <hr className='my-4 border-gray-300' />
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full '>
        {ReviewData.map((comment, index) => {
          if (!moreReview && index > 5) return null
          return (
            <div key={index} className='bg-white p-4 px-2 mr-20'>
              <div className=' mb-10 text-base'>
                <ReviewHeader
                  image={comment.image}
                  name={comment.name}
                  nationality={comment.nationality}
                />
                <ReviewContent
                  rating={comment.rating}
                  timeStamp={comment.timeStamp}
                  message={comment.message}
                />
              </div>
            </div>
          )
        })}
      </div>
      <div className='mt-4'>
        <ReviewMoreButton setMoreReview={setMoreReview} />
      </div>
    </div>
  )
}

export default Review
