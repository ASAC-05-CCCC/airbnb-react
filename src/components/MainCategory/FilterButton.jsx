function FilterButton({ setIsFilterModal }) {
  return (
    <button
      className='flex flex-row place-items-center place-content-center 
    hover:bg-gray-100 w-20 h-12 border border-black border-2 rounded-xl m-4 transition-all'
      onClick={() => {
        setIsFilterModal(prev => {
          return !prev
        })
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
