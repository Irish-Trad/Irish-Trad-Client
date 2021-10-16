import MenuItem from 'components/MenuItem'

import menuItems from 'routes/menuRoutes'

type Props = {
  showFullMenu: boolean
  setShowFullMenu: (param: boolean) => void
}

const MenuMobileFull = ({ showFullMenu, setShowFullMenu }: Props) => (
  <div
    className="bg-gray-700 fixed w-screen h-screen flex flex-col justify-center"
    style={{ zIndex: 1 }}
  >
    {/* <div className="flex justify-end py-6 pr-4 pt-2 text-2xl"> */}
    <p
      className="absolute top-0 right-4 text-white cursor-pointer"
      onClick={() => setShowFullMenu(!showFullMenu)}
    >
      X
    </p>
    {/* </div> */}
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
