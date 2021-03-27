import { useContext } from 'react'
import Page from 'components/Page'

import { AccessibilityContext } from 'context/app/accessibility.provider'

import { H1, Text } from 'common/StyledComponents/StyledComponents'

const Accessibility = () => {
  const { dyslexicFontActive, toggleDyslexicFontActive } = useContext(
    AccessibilityContext
  )

  return (
    <Page
      title="Irish-Trad.net - Accessibility"
      metaDescription="Accessibility for Irish-Trad.net"
    >
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
    </Page>
  )
}

export default Accessibility
