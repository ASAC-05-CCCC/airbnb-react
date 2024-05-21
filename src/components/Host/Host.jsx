import React from 'react'
import HostHeader from './HostHeader'
import HostInfo from './HostInfo'
import HostSpeak from './HostSpeak'
import HostContent from './HostContent'
import HostMessageButton from './HostMessageButton'
import HostFooter from './HostFooter'

const Header = () => {
  return (
    <div>
      <div>
        <HostHeader />
      </div>
      <div>
        <HostInfo />
        <HostSpeak />
        <HostContent />
        <HostContent />
        <HostMessageButton />
        <HostFooter />
      </div>
    </div>
  )
}

export default Header
