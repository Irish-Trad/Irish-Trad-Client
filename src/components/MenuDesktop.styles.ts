import tw from 'tailwind-styled-components'

type Props = {
  openmenu: string
}

const MenuDesktopContainer = tw.div<Props>`hidden lg:flex flex-col justify-between h-screen

${(props) => {
  if (props.openmenu === 'true') {
    return 'w-48'
  }
}}
`

export { MenuDesktopContainer }