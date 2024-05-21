import laurelwreath1 from '../../image/laurelwreath1.png'
import laurelwreath2 from '../../image/laurelwreath2.png'

const GuestFavoriteHeader = () => {
  return <div className='border-2 border-red-400 rounded-lg p-4'>
    <img src={laurelwreath1}></img>
    <span className='text-3xl font-bold underline'>5.0</span>
    <img src={laurelwreath2}></img>
  </div>
}

export default GuestFavoriteHeader
