import React from 'react'
import Page from 'components/Page/Page.component'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import Icon from '@material-ui/core/Icon'

import Button from 'common/Button/Button.component'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Community = () => (
  <Page
    title="Irish-Trad.net - Community"
    metaDescription="Community for Irish-Trad.net"
  >
    <Typography variant="h1">Community</Typography>
    <section>
      <Typography variant="body1">
        I have created a Discord server to allow users of Irish-Trad.net to
        interact with each other and discuss various topics regarding Irish Trad
        music.
      </Typography>
      <Typography variant="body1">
        To join the Irish-Trad.net Discord Server simply click the following
        Icon or Button:
      </Typography>
      <Box display="flex" flexDirection="row" justifyContent="space-evenly">
        <Link href="https://discord.gg/Mq9jeA8" target="_blank">
          <Icon component={FontAwesomeIcon} icon={['fab', 'discord']} />
        </Link>
        <Link href="https://discord.gg/Mq9jeA8" target="_blank">
          <Button>Click Here To Join Discord</Button>
        </Link>
      </Box>
      <Typography variant="body1">
        Discord is a free platform that allows for live voice and text
        communication similar to Skype, Messenger and IRC channels of old.
      </Typography>
      <Typography variant="body1">
        To get an idea of what a Discord server looks like you can click the
        following Image:
      </Typography>
      <figure>
        <Link href="assets/discord.jpg" target="_blank">
          <img
            src="assets/discord.jpg"
            alt="Screenshot of Discord"
            title="Screenshot of Discord"
          />
        </Link>
        <figcaption>Pictured: Screenshot of Irish-Trad Discord</figcaption>
      </figure>
      <Typography variant="body1">
        Clicking on one of the specific channels found on the left brings you
        into that chatroom were you can discuss that particular topic.
      </Typography>
      <Typography variant="body1">
        For more information about Discord you can visit the official Discord
        webpage here:{' '}
        <Link
          href="https://discordapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord Website
        </Link>
      </Typography>
      <Typography variant="body1">
        Discord can be accessed through any web browser and downloaded as an
        application on desktop and mobile.
      </Typography>
      <Typography variant="body1">
        The Discord icon can also be found in the footer of every page to make
        future access easier.
      </Typography>
    </section>
  </Page>
)

export default Community
