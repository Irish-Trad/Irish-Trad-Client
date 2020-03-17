import React from 'react'
import Metadata from 'common/Metadata'

import {
  MainContainer,
  H1,
  Text,
  ExternalLink,
  Figure,
  Figcaption
} from 'common/StyledComponents/StyledComponents.js'

import {
  StyledLink,
  StyledIcon,
  ButtonContainer,
  Button,
  InternalLink,
  Image
} from './Community.styles'

const Community: React.FunctionComponent = () => (
  <MainContainer>
    <Metadata
      title="Irish-Trad.net - Community"
      metaTitle="Irish-Trad.net - Community"
      metaKeywords="Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
      metaDescription="Community for Irish-Trad.net"
    />
    <H1>Community</H1>
    <Text>
      I have created a Discord server to allow users of Irish-Trad.net to
      interact with each other and discuss various topics regarding Irish Trad
      music.
    </Text>
    <Text>
      To join the Irish-Trad.net Discord Server simply click the following Icon
      or Button:
    </Text>
    <ButtonContainer>
      <StyledLink href="https://discord.gg/Mq9jeA8" target="_blank">
        <StyledIcon icon={['fab', 'discord']} />
      </StyledLink>
      <ExternalLink href="https://discord.gg/Mq9jeA8" target="_blank">
        <Button>Click Here To Join Discord</Button>
      </ExternalLink>
    </ButtonContainer>
    <Text>
      Discord is a free platform that allows for live voice and text
      communication similar to Skype, Messenger and IRC channels of old.
    </Text>
    <Text>
      To get an idea of what a Discord server looks like you can click the
      following Image:
    </Text>
    <Figure>
      <InternalLink to="../assets/discord.jpg" target="_blank">
        <Image
          src="../assets/discord.jpg"
          alt="Screenshot of Discord"
          title="Screenshot of Discord"
        />
      </InternalLink>
      <Figcaption>Pictured: Screenshot of Irish-Trad Discord</Figcaption>
    </Figure>
    <Text>
      Clicking on one of the specific channels found on the left brings you into
      that chatroom were you can discuss that particular topic.
    </Text>
    <Text>
      For more information about Discord you can visit the official Discord
      webpage here:{' '}
      <ExternalLink
        href="https://discordapp.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Discord Website
      </ExternalLink>
    </Text>
    <Text>
      Discord can be accessed through any web browser and downloaded as an
      application on desktop and mobile.
    </Text>
    <Text>
      The Discord icon can also be found in the footer of every page to make
      future access easier.
    </Text>
  </MainContainer>
)

export default Community
