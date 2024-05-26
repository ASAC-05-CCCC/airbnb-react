const AccountModal = () => {
  return (
    <>
      {/* list */}
      <ul className='right-0 flex flex-col py-2 text-sm text-gray-500 w-50'>
        <div className='flex flex-col border-b-2'>
          <li className='px-3 py-2 transition-all duration-100 cursor-pointer hover:bg-gray-100'>
            <a href='/' className='text-left'>
              회원가입
            </a>
          </li>
          <li className='px-3 py-2 transition-all duration-100 cursor-pointer hover:bg-gray-100'>
            <a href='/'>로그인</a>
          </li>
        </div>
        <div className='flex flex-col'>
          <li className='px-3 py-2 transition-all duration-100 cursor-pointer hover:bg-gray-100'>
            <a href='/'>당신의 공간을 에어비엔비하세요</a>
          </li>
          <li className='px-3 py-2 transition-all duration-100 cursor-pointer hover:bg-gray-100'>
            <a href='/'>도움말 센터</a>
          </li>
        </div>
      </ul>
    </>
  )
}

export default AccountModal
