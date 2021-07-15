import Page from 'components/Page'

import Button from 'common/Button'
import Discord from 'assets/icons/Discord'

const Community = () => (
  <Page
    title="Irish-Trad.net - Community"
    metaDescription="Community for Irish-Trad.net"
  >
    <p>Community</p>
    <section>
      <p>
        I have created a Discord server to allow users of Irish-Trad.net to
        interact with each other and discuss various topics regarding Irish Trad
        music.
      </p>
      <p>
        To join the Irish-Trad.net Discord Server simply click the following
        Icon or Button:
      </p>
      <div>
        <a href="https://discord.gg/Mq9jeA8" target="_blank">
          <Discord />
        </a>
        <a href="https://discord.gg/Mq9jeA8" target="_blank">
          <Button>Click Here To Join Discord</Button>
        </a>
      </div>
      <p>
        Discord is a free platform that allows for live voice and text
        communication similar to Skype, Messenger and IRC channels of old.
      </p>
      <p>
        To get an idea of what a Discord server looks like you can click the
        following Image:
      </p>
      <figure>
        <a href="assets/discord.jpg" target="_blank">
          <img
            src="assets/discord.jpg"
            alt="Screenshot of Discord"
            title="Screenshot of Discord"
          />
        </a>
        <figcaption>Pictured: Screenshot of Irish-Trad Discord</figcaption>
      </figure>
      <p>
        Clicking on one of the specific channels found on the left brings you
        into that chatroom were you can discuss that particular topic.
      </p>
      <p>
        For more information about Discord you can visit the official Discord
        webpage here:{' '}
        <a
          href="https://discordapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Discord Website
        </a>
      </p>
      <p>
        Discord can be accessed through any web browser and downloaded as an
        application on desktop and mobile.
      </p>
      <p>
        The Discord icon can also be found in the footer of every page to make
        future access easier.
      </p>
    </section>
  </Page>
)

export default Community
