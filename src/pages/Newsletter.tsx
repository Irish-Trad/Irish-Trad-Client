import Page from 'components/Page'

import Button from 'common/Button/Button'
import Mailchimp from 'assets/icons/Mailchimp'

const Newsletter = () => (
  <Page
    title="Irish-Trad.net - Newsletter"
    metaDescription="Newsletter for Irish-Trad.net"
  >
    <p>Newsletter</p>
    <section>
      <p>
        Irish-Trad.net is a hobby project so progress is slow when developing
        new resources or lessons.
      </p>
      <p>
        If you would like to sign-up to receive an email when large changes have
        been made I have created a MailChimp subscription which can be found by
        clicking the following Icon or Button:
      </p>
      <div>
        <a href="https://mailchi.mp/bfa9fa63aaab/irish-trad" target="_blank">
          <Mailchimp />
        </a>
        <a href="https://mailchi.mp/bfa9fa63aaab/irish-trad" target="_blank">
          <Button>Sign Up For Newsletter</Button>
        </a>
      </div>
      <p>
        MailChimp allows you to manage your subscription at anytime so
        unsubscribing is easy if you change your mind.
      </p>
    </section>
  </Page>
)

export default Newsletter
