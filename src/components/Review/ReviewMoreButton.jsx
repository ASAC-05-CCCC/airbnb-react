const data = 16

const ReviewMoreButton = ({ setMoreReview }) => {
  return (
    <button
      onClick={() => setMoreReview(prev => !prev)}
      className='border border-solid border-black rounded-lg font-semibold text-center mt-10 px-4 py-2'
    >
      후기 {data}개 모두 보기
    </button>
  )
}

export default ReviewMoreButton
