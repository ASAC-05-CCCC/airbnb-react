import React from 'react'
import GuestFavorite from '../components/GuestFavorite/GuestFavorite.jsx'
import ReviewMeta from '../components/ReviewMeta/ReviewMeta.jsx'
import Review from '../components/Review/Review.jsx'

const searchPage = () => {
  return (
    <div>
      <GuestFavorite />
      <ReviewMeta />
      <Review />
    </div>
  )
}

export default searchPage
