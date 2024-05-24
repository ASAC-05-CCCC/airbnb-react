import { GuestContextProvider } from '../../context/GuestCountContext'
import SearchModal from '../common/SearchModal'
import GuestList from './GuestList'

const GuestInput = () => {
  return (
    <>
      <div className={`absolute right-0  top-16 w-2/3`}>
        <SearchModal>
          <GuestContextProvider>
            <GuestList />
          </GuestContextProvider>
        </SearchModal>
      </div>
    </>
  )
}

export default GuestInput
