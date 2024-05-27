import DetailModal from '../common/DetailModal'
import GuestFavorite from '../GuestFavorite/GuestFavorite.jsx'
import ReviewModalSearch from './ReviewModalSearch.jsx'

const ReviewModal = ({ reviewMetaData, reviewData }) => {
  return (
    <DetailModal>
      <div className='flex flex-col rounded justify-center text-sm bg-white'>
        <div className=' basis-[72px]' aria-hidden='true'></div>
        <div className='flex px-16 gap-8'>
          <div className='flex flex-col'>
            <GuestFavorite />
          </div>
          <ReviewModalSearch />
        </div>
      </div>
    </DetailModal>
  )
}

export default ReviewModal
