function FilterButton({ setIsFilterModal }) {
  return (
    <button
      className='flex flex-row place-items-center place-content-center 
    hover:bg-gray-100 hover:border-black w-20 h-12 border-gray-300 border rounded-xl m-4 transition-all'
      onClick={() => {
        setIsFilterModal(prev => !prev)
      }}
    >
      <div>
        <img src='/src/assets/hamburgerIcon.svg' />
      </div>
      <div className='whitespace-nowrap'>필터</div>
    </button>
  )
}

export default FilterButton
