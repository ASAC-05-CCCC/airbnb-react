import GuestFavorite from '../../components/Comment/GuestFavorite.jsx'
import ReviewMeta from '../../components/Comment/ReviewMeta.jsx'
import Review from '../../components/Comment/Review.jsx'

import React from 'react'

const Comment = () => {
  return (
    <>
      <GuestFavorite />
      <ReviewMeta />
      <Review />
    </>
  )
}

export default Comment
