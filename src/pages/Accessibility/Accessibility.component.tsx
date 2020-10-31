import React, { useContext } from 'react'
import Metadata from 'common/Metadata'

import { AccessibilityContext } from 'context/app/accessibility.provider'

import { H1, Text } from 'common/StyledComponents/StyledComponents'

const Accessibility: React.FC = () => {
  const { dyslexicFontActive, toggleDyslexicFontActive } = useContext(
    AccessibilityContext
  )

  return (
    <>
      <Metadata
        title="Irish-Trad.net - Accessibility"
        metaTitle="Irish-Trad.net - Accessibility"
        metaKeywords="Irish Trad, Irish Traditional, Irish Tenor Banjo, Irish Bouzouki, Bouzouki, Mandolin, Octave Mandolin, Mandola, Octave Mandola, Chords, TAB, Tablature"
        metaDescription="Accessibility for Irish-Trad.net"
      />
      <H1>Accessibility</H1>
      <Text>
        To improve accessibility on Irish-Trad.net you can use this page to
        change how content is displayed across all pages
      </Text>
      <div>
        <Text>Dyslexic Font: </Text>
        <button onClick={toggleDyslexicFontActive}>
          {dyslexicFontActive
            ? 'Turn Off Dyslexic Font'
            : 'Turn On Dyslexic Font'}
        </button>
      </div>
    </>
  )
}

export default Accessibility
