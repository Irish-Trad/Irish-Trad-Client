import Page from 'components/Page'

import {
  H1,
  Text,
  ExternalLink,
} from 'common/StyledComponents/StyledComponents'

import {
  StyledLink,
  StyledIcon,
  ButtonContainer,
  Button,
} from './Newsletter.styles'

const Newsletter = () => (
  <Page
    title="Irish-Trad.net - Newsletter"
    metaDescription="Newsletter for Irish-Trad.net"
  >
    <H1>Newsletter</H1>
    <section>
      <Text>
        Irish-Trad.net is a hobby project so progress is slow when developing
        new resources or lessons.
      </Text>
      <Text>
        If you would like to sign-up to receive an email when large changes have
        been made I have created a MailChimp subscription which can be found by
        clicking the following Icon or Button:
      </Text>
      <ButtonContainer>
        <StyledLink
          href="https://mailchi.mp/bfa9fa63aaab/irish-trad"
          target="_blank"
        >
          <StyledIcon icon={['fab', 'mailchimp']} />
        </StyledLink>
        <ExternalLink href="https://discord.gg/Mq9jeA8" target="_blank">
          <Button>Sign Up For Newsletter</Button>
        </ExternalLink>
      </ButtonContainer>
      <Text>
        MailChimp allows you to manage your subscription at anytime so
        unsubscribing is easy if you change your mind.
      </Text>
    </section>
  </Page>
)

export default Newsletter
