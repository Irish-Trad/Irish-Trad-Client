import MenuItem from 'components/MenuItem'

import menuItems from 'routes/menuRoutes'

type Props = {
  showFullMenu: boolean
  setShowFullMenu: (param: boolean) => void
}

const MenuMobileFull = ({ showFullMenu, setShowFullMenu }: Props) => (
  <div className="bg-gray-700 fixed w-screen h-screen flex flex-col">
    <div className="flex justify-end py-6 pr-4 pt-2 text-2xl">
      <p onClick={() => setShowFullMenu(!showFullMenu)}>X</p>
    </div>
    <div className="overflow-auto">
      {menuItems.map((item) => (
        <MenuItem
          item={item}
          setShowFullMenu={setShowFullMenu}
          showFullMenu={showFullMenu}
        />
      ))}
    </div>
  </div>
)

export default MenuMobileFull
