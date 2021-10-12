import MobileMenu from 'components/MobileMenu'
import DesktopMenu from 'components/DesktopMenu'

// TODO: type children
const MainLayout = ({ children }: any) => (
  <div className="flex flex-col">
    <MobileMenu />
    <div className="flex">
      <DesktopMenu />
      {children}
    </div>
  </div>
)

export default MainLayout
