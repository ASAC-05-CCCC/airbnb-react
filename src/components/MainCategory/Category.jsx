import React, { useState, useEffect, useRef } from 'react'

import CategoryItem from './CategoryItem'
import FilterButton from './FilterButton'
import DetailModal from '../common/DetailModal'

import categoryData from '../../../public/json/categoryList.json'
import FilterComponent from './FilterComponent'

function Category() {
  const categoryList = categoryData.categoryList

  const [isFilterModal, setIsFilterModal] = useState(false)

  return (
    <>
      <div className='flex flex-row place-items-center place-content-center'>
        <div className='flex flex-row space-x-5 p-5 overflow-auto w-10/12'>
          {categoryList.map((item, index) => {
            return (
              <CategoryItem
                key={index}
                categoryIcon={item.categoryIcon}
                categoryName={item.categoryName}
              />
            )
          })}
        </div>
        <FilterButton setIsFilterModal={setIsFilterModal} />
        {isFilterModal && <FilterComponent setIsFilterModal={setIsFilterModal} />}
      </div>
    </>
  )
}

export default Category
