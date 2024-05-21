import Logo from './Logo'
import Login from './Login'
import NavigationBar from './NavigationBar'
import AccountModal from './AccountModal'
import { useState } from 'react'
import SearchBar from './SearchBar'
import LocationInput from './LocationInput'

const Header = () => {
  const [accountActive, setAccountActive] = useState(false)

  return (
    <>
      <div className='w-full h-40'>
        <header className='w-full'>
          <div className='relative flex items-center w-full h-full py-3'>
            <Logo />
            {/* nav bar */}
            <div className='flex-auto text'>
              <div className='left-0 w-full transition-all origin-center sm:absolute sm:top-20 lg:top-6'>
                <form onSubmit={e => e.preventDefault()} className='w-full' action='/'>
                  <div className='flex flex-col items-center justify-center w-full'>
                    <NavigationBar />
                    <SearchBar>
                      <LocationInput />
                    </SearchBar>
                  </div>
                </form>
              </div>
            </div>

            <Login setAccountActive={setAccountActive}>
              <AccountModal accountActive={accountActive} />
            </Login>
          </div>
        </header>
      </div>
    </>
  )
}

export default Header
