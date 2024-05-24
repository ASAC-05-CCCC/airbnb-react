import ReviewHeader from './ReviewHeader'
import ReviewContent from './ReviewContent'
import ReviewMoreButton from './ReviewMoreButton'
import { useState } from 'react'

const Review = ({ reviewData }) => {
  const [moreReview, setMoreReview] = useState(false)
  return (
    <div>
      <hr className='my-4 border-gray-300' />
      <div className='grid grid-cols-1 lg:grid-cols-2 w-full '>
        {reviewData.map((comment, index) => {
          if (!moreReview && index > 5) return null
          return (
            <div key={index} className='bg-white p-4 px-2 mr-20'>
              <div className=' mb-10 text-base'>
                <ReviewHeader image={comment.image} name={comment.name} country={comment.country} />
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
