import React from 'react'

function CategoryItem({ categoryIcon, categoryName }) {
  return (
    <>
      <button className='flex flex-col items-center justify-center p-2 w-20'>
        <img src={categoryIcon} width='30' height='30' />

        <div className='whitespace-nowrap text-xs'>{categoryName}</div>
      </button>
    </>
  )
}

export default CategoryItem
