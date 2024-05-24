import GuestFavorite from '../../components/GuestFavorite/GuestFavorite.jsx'
import ReviewMeta from '../../components/ReviewMeta/ReviewMeta.jsx'
import Review from '../../components/Review/Review.jsx'

const Comment = () => {
  return (
    <div className='px-20'>
      <GuestFavorite />
      <ReviewMeta />
      <Review />
    </div>
  )
}

export default Comment
