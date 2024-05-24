const ReviewContent = ({ rating, timeStamp, message }) => (
  <div className='mt-2'>
    <div className='flex items-center'>
      <span className='text-black-500'>{'★'.repeat(rating)}</span>
      <span className='ml-2 text-gray-600 text-sm'>{timeStamp}</span>
    </div>
    <p className='mt-2 text-gray-800'>{message}</p>
  </div>
)

export default ReviewContent
