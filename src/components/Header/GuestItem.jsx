const GuestItem = ({ item }) => {
  const { title, desc } = item
  return (
    <li
      className={`flex items-center justify-between pb-6  border-b-2 ${
        title == '반려동물' && 'border-none pb-0'
      } `}
    >
      <div className='flex flex-col'>
        <p className=''>{title}</p>
        <span className='text-gray-400'>{desc}</span>
      </div>

      <div className='flex-1'></div>

      <div className='flex gap-4'>
        <button className='px-2 transition-all border border-gray-200 rounded-full hover:border-gray-600'>
          -
        </button>
        <span>0</span>
        <button className='px-2 transition-all border border-gray-200 rounded-full hover:border-gray-600'>
          +
        </button>
      </div>
    </li>
  )
}

export default GuestItem
