import {
  H1,
  Button,
  InternalLink,
} from 'common/StyledComponents/StyledComponents'

const NotFound = () => (
  <>
    <H1>404 - No Page Found</H1>
    <InternalLink to={'/'}>
      <Button>Click Here to Return Home</Button>
    </InternalLink>
  </>
)

export default NotFound
