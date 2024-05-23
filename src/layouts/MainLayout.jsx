import Header from '../components/Header/Header'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='flex flex-col items-center px-10'>
        <Header />
        <section className='w-full h-screen bg-sky-300'>{children}</section>
        {/* footer */}
      </div>
    </>
  )
}

export default MainLayout
