function ReviewMetaContent({ category, value, icon }) {
  return (
    <div className='flex font-semibold bg-white p-4 '>
      <div className='border-l-2 border-gray-400 mr-5'></div> {/* 세로 선 */}
      <div className='flex-col text-sm '>
        <div className='text-gray-700'>{category}</div>
        <div className='flex-col'>
          <div className='text-gray-700 mb-5'>{value}</div>
          <img src={icon} className='w-6 h-6' alt={category} />
        </div>
      </div>
    </div>
  )
}

export default ReviewMetaContent
