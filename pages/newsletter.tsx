import { FC } from 'react'
import Layout from 'layouts/Layout'
import Mailchimp from 'components/icons/Mailchimp'

const Newsletter: FC = () => (
  <Layout
    title='Irish-Trad.net - Newsletter'
    metaDescription='Newsletter for Irish-Trad.net'
  >
    <p>
      Irish-Trad.net is a hobby project so progress is slow when developing new
      resources or lessons.
    </p>
    <p>
      If you would like to sign-up to receive an email when large changes have
      been made I have created a MailChimp subscription which can be found by
      clicking the following Icon or Button:
    </p>
    <div className='flex justify-center my-4'>
      <Mailchimp />
      <a
        className='mx-4'
        href='https://mailchi.mp/bfa9fa63aaab/irish-trad'
        target='_blank'
        rel='noreferrer'
      >
        <button>Sign Up For Newsletter</button>
      </a>
    </div>
    <p>
      MailChimp allows you to manage your subscription at anytime so
      unsubscribing is easy if you change your mind.
    </p>
  </Layout>
)

export default Newsletter
