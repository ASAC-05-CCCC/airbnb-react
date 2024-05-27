const ReviewMoreButton = ({ setMoreReview, data }) => {
  return (
    <button
      onClick={() => setMoreReview(prev => !prev)}
      className='border border-black rounded-lg font-semibold text-center px-4 py-2'
    >
      후기 {data}개 모두 보기
    </button>
  )
}

export default ReviewMoreButton
