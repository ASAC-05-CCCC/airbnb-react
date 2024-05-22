import Superhost from '../../assets/Superhost.svg'

const Label = ({ label, value }) => {
  return (
    <div className='flex flex-col items-center mr-4'>
      <span className='text-xs font-bold'>{label}</span>
      <span className='text-xl flex items-baseline'>
        {value}
        <span className='text-sm ml-1'>
          {label === '후기' ? '개' : label === '평점' ? '⭐' : '개월'}
        </span>
      </span>
    </div>
  )
}

const HostProfile = ({ name, superhost, review, rating, career }) => {
  return (
    <div className=''>
      <section className='flex bg-white rounded-3xl py-6 px-4 bg-wite justify-between shadow-md'>
        <div className='gap-2'>
          <button className='rounded-full overflow-hidden focus:outline-none'>
            <img src='asb' alt='User profile' className='h-24 w-24 rounded-full bg-gray-300' />
          </button>
          <h2 className='text-center text-3xl font-bold'>{name}</h2>
          {superhost && (
            <span className='flex items-center text-sm mt-2'>
              <img src={Superhost} className='w-6 h-6' />
              <span className=' text-sm ml-1'>슈퍼호스트</span>
            </span>
          )}
        </div>
        <div className='ml-4 mt-2 mb-2 '>
          <div className='items-center flex flex-col'>
            <Label label='후기' value={review} />
            <hr className='block mt-2 mb-2 mx-auto border border-inset w-full'></hr>
            <Label label='평점' value={rating} />
            <hr className='block mt-2 mb-2 mx-auto border border-inset w-full'></hr>
            <Label label='호스팅 경력' value={career} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default HostProfile
