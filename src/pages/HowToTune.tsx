import PageMeta from 'components/PageMeta'
import Page from 'components/Page'
import { Link } from 'react-router-dom'

import {
  H2,
  ButtonContainer,
  Button,
  ExternalLink,
  UL,
  LI,
} from './HowToTune.styles'

const HowToTune = () => (
  <PageMeta
    title="Irish-Trad.net - How To Tune"
    metaDescription="How To Tune Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo/Irish Tenor Banjo"
  >
    <Page header="How To Tune An Instrument">
      <ButtonContainer>
        <Link to="/lessons">
          <Button>Return to Lessons Page</Button>
        </Link>
      </ButtonContainer>
      <H2>Introduction:</H2>
      <p>
        Knowing how to tune your instrument is another vital skill that a
        musician needs to learn if they ever intend to play with other
        musicians.
      </p>
      <p>
        The following section explains how to use a chromatic tuner to tune the
        Irish Bouzouki to "standard" pitch as well as information to help
        understand how alternative tunings are achieved.
      </p>
      <p>
        Devices such as smartphones and tablets that have a built-in microphone
        usually have a chromatic tuner available as an application. These can be
        useful when you quickly need to tune an instrument but they rarely work
        in noisy environments. Performing musicians tend to favour devices such
        as clip-on tuners.
      </p>
      <H2>How to:</H2>
      <p>
        Strings were attached in the first lesson so now it's time to bring them
        to pitch. The tuning pegs at the top of the instrument are turned which
        increases the pitch of that string as it tightens or decreases the pitch
        as the string loosens.
      </p>
      <p>
        Plucking a string causes it vibrate a number of times a second. This
        value is referred to as the frequency and is measured in Hertz (Hz).
      </p>
      <p>
        Standard tuning on an Irish Bouzouki with unison strings means that the
        frequency for each string is as follows:
      </p>
      <UL>
        <LI>E String - E4 - 329.63 Hz</LI>
        <LI>A String - A3 - 220.00 Hz</LI>
        <LI>D String - D3 - 146.83 Hz</LI>
        <LI>G String - G2 - 96.00 Hz</LI>
      </UL>
      <p>
        With octave strings the G string and D string are paired with a string
        one octave above the other. An octave is double the frequency of the
        previous. The top 4 strings will now be tuned:
      </p>
      <UL>
        <LI>D String - D3 - 146.83 Hz</LI>
        <LI>D String (Octave) - D4 - 293.66 Hz</LI>
        <LI>G String - G2 - 96.00 Hz</LI>
        <LI>G String (Octave) - G3 - 196.00 Hz</LI>
      </UL>

      <p>
        For those that play stringed instruments other than the Irish Bouzouki.
        The generally agreed standard tuning for each instrument can be found
        through the following wikipedia article:
      </p>
      <ExternalLink href="https://en.wikipedia.org/wiki/Stringed_instrument_tunings#I">
        Stringed Instrument Tunings (external)
      </ExternalLink>
      <p>
        After discovering the note. The following website provides a useful
        chart for converting notes to the specific frequency. Just incase the
        chromatic tuner you use only works with only exact frequency.
      </p>
      <ExternalLink href="http://www.contrabass.com/pages/frequency.html">
        Note to Frequency conversion chart (external)
      </ExternalLink>
      <p>
        While a new set of strings settle in the instrument it might require a
        few repeat tunings. A technique that people employ to speed up the
        settling process is to "stretch" the string. This involves lifting the
        string away from the fretboard around the 12th fret. Doing this process
        about 2-3 with tuning should be enough for a properly set-up instrument
        to retain tuning of new strings.
      </p>
    </Page>
  </PageMeta>
)

export default HowToTune
