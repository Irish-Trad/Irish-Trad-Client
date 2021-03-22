import Footer from 'components/Footer'
import Navbar from 'components/Navbar'

import { Header, LogoContainer, Title } from './DesktopHeader.styles'

const DesktopHeader = () => (
  <Header>
    <LogoContainer>
      <Title>Irish-Trad.net</Title>
    </LogoContainer>
    <Navbar />
    <Footer />
  </Header>
)

export default DesktopHeader
