import React from 'react'
import ReviewHeader from './ReviewHeader'
import ReviewContent from './ReviewContent'
import ReviewMoreButton from './ReviewMoreButton'

const Review = () => {
  return (
    <div>
      <div>
        <ReviewHeader />
        <ReviewContent />
      </div>
      <div>
        <ReviewMoreButton />
      </div>
    </div>
  )
}

export default Review
