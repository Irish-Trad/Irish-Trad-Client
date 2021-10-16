import { MenuDesktopContainer } from 'components/MenuDesktop.styles'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { useState } from 'react'
import menuItems from 'routes/menuRoutes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuDesktop = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(true)

  return (
    <MenuDesktopContainer openmenu={openMenu.toString()}>
      <div>
        <div
          className="flex justify-end"
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FontAwesomeIcon
            className="text-white"
            icon={['fas', `${openMenu ? 'caret-left' : 'caret-right'}`]}
          />
        </div>
        <Link
          to={'/'}
          className="flex justify-center py-4 border-b-2 hover:bg-gray-900"
        >
          Irish-Trad.net
        </Link>
        <div className="overflow-auto">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className="flex justify-center py-6 hover:bg-gray-900"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </MenuDesktopContainer>
  )
}

export default MenuDesktop
