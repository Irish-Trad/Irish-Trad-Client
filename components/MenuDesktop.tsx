import { FC, useState } from 'react'
import Footer from 'components/Footer'
import menuItems from 'utils/menuItems'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const MenuDesktop: FC = () => {
  const [openMenu, setOpenMenu] = useState(true)

  return (
    <div
      className={`flex-col justify-between hidden bg-gray-700 lg:flex ${
        openMenu ? 'w-60' : 'w-12'
      }`}
    >
      <div className='flex flex-col flex-1 overflow-auto'>
        <div
          className='flex justify-center'
          onClick={() => setOpenMenu(!openMenu)}
        >
          <FontAwesomeIcon
            className='text-white'
            icon='arrows-left-right-to-line'
          />
        </div>
        <Link href='/'>
          <a className='flex justify-center py-6 border-b-2 hover:bg-gray-900'>
            Irish-Trad.net
          </a>
        </Link>
        <div className='h-full max-h-full overflow-auto'>
          {menuItems.map((item) => (
            <Link key={item.path} href={item.path}>
              <a className='flex justify-center py-6 hover:bg-gray-900'>
                {item.label}
              </a>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default MenuDesktop
