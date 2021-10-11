import { useContext } from 'react'
import Page from 'components/Page'
import { AccessibilityContext } from 'context/app/accessibility.provider'
import Button from 'components/Button'

const Accessibility = () => {
  const { dyslexicFontActive, toggleDyslexicFontActive } =
    useContext(AccessibilityContext)

  return (
    <Page
      title="Irish-Trad.net - Accessibility"
      metaDescription="Accessibility for Irish-Trad.net"
    >
      <h1>Accessibility</h1>
      <p>
        To improve accessibility on Irish-Trad.net you can use this page to
        change how content is displayed across all pages
      </p>
      <div>
        <p>Dyslexic Font: </p>
        <Button onClick={toggleDyslexicFontActive}>
          {dyslexicFontActive
            ? 'Turn Off Dyslexic Font'
            : 'Turn On Dyslexic Font'}
        </Button>
      </div>
    </Page>
  )
}

export default Accessibility
