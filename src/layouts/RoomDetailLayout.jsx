import Comment from '../pages/Comment/Comment'
import RoomView from '../components/RoomView/RoomView'
import RoomInfo from '../components/RoomInfo/RoomInfo'
import RoomIntroduce from '../components/RoomIntroduce/RoomIntroduce'
import RoomFacilities from '../components/RoomFacilities/RoomFacilities'
import SleepSpec from '../components/SleepSpec/SleepSpec'
import Host from '../components/Host/Host.jsx'
import Notification from '../components/Notification/Notification.jsx'

const RoomDetailLayout = ({ children }) => {
  return (
    <>
      <Header />
      <div className='flex flex-col'>
        <RoomView />
        <section className='flex w-full border-b-2'>
          <div className='flex flex-col w-full basis-2/3'>
            <RoomInfo />
            <RoomIntroduce />
            <SleepSpec />
          </div>
          <div>{/* 예약 버튼*/}</div>
        </section>
        <Comment />
        <section className='flex flex-col items-center w-full'>
          <RoomFacilities />
          {/* 달력 */}
        </section>
        {/* <GuestFavorite /> */}
        <Host />
        <Notification />
      </div>
      <Footer />
    </>
  )
}

export default RoomDetailLayout
