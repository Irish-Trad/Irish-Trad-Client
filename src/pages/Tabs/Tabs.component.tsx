import React from 'react'
import Metadata from 'common/Metadata'

import * as GDAE from './routes/GDAE'
import * as GDAD from './routes/GDAD'

import {
  MainContainer,
  H1,
  H2,
  Text
} from 'common/StyledComponents/StyledComponents'

import { Section, InternalLink } from './Tabs.styles'

const Tabs: React.FunctionComponent = () => (
  <MainContainer>
    <Metadata
      title="Irish-Trad.net - Tablature"
      metaTitle="Irish-Trad.net - Tablature"
      metaKeywords="Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
      metaDescription="Tablature for Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo"
    />
    <H1>Tabs</H1>
    <Text>
      For those more familiar with Tablature than standard music notation or ABC
      notation I have taken a number of tunes from TheSession.org and tabbed
      them out for both GDAE and GDAD. They are in a .pdf format.
    </Text>
    <Text>
      If you find these useful in anyway you should consider visiting
      TheSession.org and even considering donating to the website. It has stood
      as a beacon for sharing and educating on traditional irish music for many
      years.
    </Text>
    <Text>https://thesession.org/donate</Text>
    <H1>GDAE</H1>
    <H2>Barndances - GDAE</H2>
    <Section>
      {GDAE.Barndance.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Hornpipes - GDAE</H2>
    <Section>
      {GDAE.Hornpipe.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Jigs - GDAE</H2>
    <Section>
      {GDAE.Jig.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Marches - GDAE</H2>
    <Section>
      {GDAE.March.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Polkas - GDAE</H2>
    <Section>
      {GDAE.Polka.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Reels - GDAE</H2>
    <Section>
      {GDAE.Reel.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Slip-Jigs - GDAE</H2>
    <Section>
      {GDAE.Slip.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Waltzes - GDAE</H2>
    <Section>
      {GDAE.Waltz.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>

    <H1>GDAD</H1>
    <H2>Barndances - GDAD</H2>
    <Section>
      {GDAD.Barndance.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Hornpipes - GDAD</H2>
    <Section>
      {GDAD.Hornpipe.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Jigs - GDAD</H2>
    <Section>
      {GDAD.Jig.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Marches - GDAD</H2>
    <Section>
      {GDAD.March.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Polkas - GDAD</H2>
    <Section>
      {GDAD.Polka.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Reels - GDAD</H2>
    {GDAD.Reel.map(el => (
      <InternalLink to={el.path} target="_blank">
        {el.name}
      </InternalLink>
    ))}
    <H2>Slip-Jigs - GDAD</H2>
    <Section>
      {GDAD.Slip.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
    <H2>Waltzes - GDAD</H2>
    <Section>
      {GDAD.Waltz.map(el => (
        <InternalLink to={el.path} target="_blank">
          {el.name}
        </InternalLink>
      ))}
    </Section>
  </MainContainer>
)

export default Tabs
