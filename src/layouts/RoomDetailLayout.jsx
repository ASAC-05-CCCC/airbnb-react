import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const RoomDetailLayout = ({ children }) => {
  return (
    <div className='flex flex-col items-center w-full px-32'>
      <Header />
      <RoomView />
      <section className='flex w-full border-b-2'>
        <div className='flex flex-col w-full basis-2/3'>
          <RoomInfo />
          <RoomIntroduce />
          <SleepSpec />
        </div>
        <div>{/* 예약 버튼*/}</div>
      </section>

      <section className='flex flex-col items-center w-full'>
        <Comment />
        <RoomFacilities />
        {/* 달력 */}
        <Host />
        <Notification />
      </section>
      <Footer />
      {/* <GuestFavorite /> */}
    </div>
  )
}

export default RoomDetailLayout
