import { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import MenuMobileFull from './MenuMobileFull'

const MenuMobile = () => {
  const [showFullMenu, setShowFullMenu] = useState(false)

  return (
    <>
      <div
        className={`fixed flex justify-between items-center h-14 w-screen bg-gray-900 px-4 lg:hidden`}
        style={{ zIndex: 1 }}
      >
        <Link to={'/'} className="text-white">
          Irish-Trad.net
        </Link>
        <FontAwesomeIcon
          className="cursor-pointer"
          onClick={() => setShowFullMenu(!showFullMenu)}
          icon={['fas', 'bars']}
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
