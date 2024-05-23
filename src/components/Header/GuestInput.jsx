import SearchModal from '../common/SearchModal'
import GuestList from './GuestList'

const GuestInput = () => {
  const guest_item = [
    { title: '성인', desc: '13세 이상' },
    { title: '어린이', desc: '2~12세' },
    { title: '유아', desc: '2세 미만' },
    { title: '반려동물', desc: '보조동물을 동반하시나요?' },
  ]
  return (
    <>
      <div className={`absolute left-0  top-16 w-2/3`}>
        <SearchModal>
          <GuestList list={guest_item} />
        </SearchModal>
      </div>
    </>
  )
}

export default GuestInput
