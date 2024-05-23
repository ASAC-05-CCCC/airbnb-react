import { useRef, useEffect } from 'react'
import DetailModal from '../common/DetailModal'

function FilterComponent({ setIsFilterModal }) {
  const filterModalRef = useRef()

  console.log(filterModalRef)

  useEffect(() => {
    function handleOutside(e) {
      if (!filterModalRef.current.contains(e.target)) {
        setIsFilterModal(prev => !prev)
      }
    }
    document.addEventListener('mousedown', handleOutside)
    return () => {
      document.removeEventListener('mousedown', handleOutside)
    }
  })

  return (
    <DetailModal>
      <div className='relative w-1/2 h-5/6 bg-white rounded-xl' ref={filterModalRef}>
        <div className='top-0'>header</div>
        <div>body</div>
        <div className='absolute w-full bottom-0 h-16 bg-gray-200'>footer</div>
      </div>
    </DetailModal>
  )
}

export default FilterComponent
