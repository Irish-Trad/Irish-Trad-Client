import React from 'react'
import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

import { Header, LogoContainer, Image, Title } from './DesktopHeader.styles'

const DesktopHeader: React.FC = () => {
  return (
    <Header>
      <LogoContainer>
        <Image
          src="assets/high-quality/2243E.jpg"
          alt="Irish-Trad.net Logo"
          title="Irish-Trad.net Logo"
        />
        <Title>Irish-Trad.net</Title>
      </LogoContainer>
      <Navbar />
      <Footer />
    </Header>
  )
}

export default DesktopHeader
