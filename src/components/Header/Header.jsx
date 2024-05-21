import Logo from './Logo'
import Login from './Login'
import NavigationBar from './NavigationBar'
import AccountModal from './AccountModal'
import { useState } from 'react'

const Header = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <div className='w-full h-30'>
        <header className='grid w-full h-full grid-cols-3 py-3 '>
          <Logo />
          {/* nav bar */}
          <NavigationBar />

          <Login setActive={setActive}>
            <AccountModal active={active} />
          </Login>
        </header>
      </div>
    </>
  )
}

export default Header
