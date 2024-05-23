import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

const MainLayout = ({ children }) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <Header />
        <section className='w-full h-screen'>{children}</section>
        <Footer />
      </div>
    </>
  )
}

export default MainLayout
