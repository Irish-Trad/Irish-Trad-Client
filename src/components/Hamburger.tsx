import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  onClick: () => void
}

const Hamburger = ({ onClick }: Props) => (
  <FontAwesomeIcon icon="bars" onClick={onClick} />
)

export default Hamburger
