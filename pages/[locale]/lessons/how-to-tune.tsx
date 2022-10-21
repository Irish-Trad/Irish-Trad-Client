import { FC } from 'react'
import Link from 'next/link'
import Layout from 'layouts/Layout'

const HowToTune: FC = () => {
  return (
    <Layout
      title='Irish-Trad.net - How To Tune'
      metaDescription='How To Tune Irish Bouzouki/Mandolin/Octave Mandolin/Irish Tenor Banjo/Irish Tenor Banjo'
    >
      <div>
        <Link href='/lessons'>
          <a>Return to Lessons Page</a>
        </Link>
      </div>
      <h2>Introduction:</h2>
      <p>
        Knowing how to tune your instrument is another vital skill that a musician
        needs to learn if they ever intend to play with other musicians.
      </p>
      <p>
        The following section explains how to use a chromatic tuner to tune the
        Irish Bouzouki to "standard" pitch as well as information to help
        understand how alternative tunings are achieved.
      </p>
      <p>
        Devices such as smartphones and tablets that have a built-in microphone
        usually have a chromatic tuner available as an application. These can be
        useful when you quickly need to tune an instrument but they rarely work in
        noisy environments. Performing musicians tend to favour devices such as
        clip-on tuners.
      </p>
      <h2>How to:</h2>
      <p>
        Strings were attached in the first lesson so now it's time to bring them
        to pitch. The tuning pegs at the top of the instrument are turned which
        increases the pitch of that string as it tightens or decreases the pitch
        as the string loosens.
      </p>
      <p>
        Plucking a string causes it vibrate a number of times a second. This value
        is referred to as the frequency and is measured in Hertz (Hz).
      </p>
      <p>
        Standard tuning on an Irish Bouzouki with unison strings means that the
        frequency for each string is as follows:
      </p>
      <ul>
        <li>E String - E4 - 329.63 Hz</li>
        <li>A String - A3 - 220.00 Hz</li>
        <li>D String - D3 - 146.83 Hz</li>
        <li>G String - G2 - 96.00 Hz</li>
      </ul>
      <p>
        With octave strings the G string and D string are paired with a string one
        octave above the other. An octave is double the frequency of the previous.
        The top 4 strings will now be tuned:
      </p>
      <ul>
        <li>D String - D3 - 146.83 Hz</li>
        <li>D String (Octave) - D4 - 293.66 Hz</li>
        <li>G String - G2 - 96.00 Hz</li>
        <li>G String (Octave) - G3 - 196.00 Hz</li>
      </ul>

      <p>
        For those that play stringed instruments other than the Irish Bouzouki.
        The generally agreed standard tuning for each instrument can be found
        through the following wikipedia article:
      </p>
      <a
        href='https://en.wikipedia.org/wiki/Stringed_instrument_tunings#I'
        target='_blank'
        rel='noopener noreferrer'
      >
        Stringed Instrument Tunings (external)
      </a>
      <p>
        After discovering the note. The following website provides a useful chart
        for converting notes to the specific frequency. Just incase the chromatic
        tuner you use only works with only exact frequency.
      </p>
      <a
        href='http://www.contrabass.com/pages/frequency.html'
        target='_blank'
        rel='noopener noreferrer'
      >
        Note to Frequency conversion chart (external)
      </a>
      <p>
        While a new set of strings settle in the instrument it might require a few
        repeat tunings. A technique that people employ to speed up the settling
        process is to "stretch" the string. This involves lifting the string away
        from the fretboard around the 12th fret. Doing this process about 2-3 with
        tuning should be enough for a properly set-up instrument to retain tuning
        of new strings.
      </p>
    </Layout>
  )
}

export default HowToTune
