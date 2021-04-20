import Page from 'components/Page'

import Typography from '@material-ui/core/Typography'
import Button from 'common/Button'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'

import Icon from '@material-ui/core/Icon'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Newsletter = () => (
  <Page
    title="Irish-Trad.net - Newsletter"
    metaDescription="Newsletter for Irish-Trad.net"
  >
    <Typography variant="h1">Newsletter</Typography>
    <Box component="section">
      <Typography variant="body1">
        Irish-Trad.net is a hobby project so progress is slow when developing
        new resources or lessons.
      </Typography>
      <Typography variant="body1">
        If you would like to sign-up to receive an email when large changes have
        been made I have created a MailChimp subscription which can be found by
        clicking the following Icon or Button:
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Link href="https://mailchi.mp/bfa9fa63aaab/irish-trad" target="_blank">
          <Icon component={FontAwesomeIcon} icon={['fab', 'mailchimp']} />
        </Link>
        <Link href="https://mailchi.mp/bfa9fa63aaab/irish-trad" target="_blank">
          <Button>Sign Up For Newsletter</Button>
        </Link>
      </Box>
      <Typography variant="body1">
        MailChimp allows you to manage your subscription at anytime so
        unsubscribing is easy if you change your mind.
      </Typography>
    </Box>
  </Page>
)

export default Newsletter
