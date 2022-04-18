import { useState, FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuMobileFull from 'components/MenuMobileFull'
import Link from 'next/link'

const MenuMobile: FC = () => {
  const [showFullMenu, setShowFullMenu] = useState(false)

  return (
    <>
      <div
        className='fixed flex items-center justify-between w-screen px-4 bg-gray-900 h-14 lg:hidden'
        style={{ zIndex: 1 }}
      >
        <Link href='/'>
          <a className='text-white'>Irish-Trad.net</a>
        </Link>
        <FontAwesomeIcon
          className='text-white cursor-pointer'
          onClick={() => setShowFullMenu(!showFullMenu)}
          icon='bars'
        />
      </div>
      {showFullMenu && (
        <MenuMobileFull
          showFullMenu={showFullMenu}
          setShowFullMenu={setShowFullMenu}
        />
      )}
    </>
  )
}

export default MenuMobile
