import { useContext } from 'react'
import Page from 'components/Page'

import { AccessibilityContext } from 'context/app/accessibility.provider'

import Typography from '@material-ui/core/Typography'
import Button from 'common/Button'
import Box from '@material-ui/core/Box'

const Accessibility = () => {
  const { dyslexicFontActive, toggleDyslexicFontActive } = useContext(
    AccessibilityContext
  )

  return (
    <Page
      title="Irish-Trad.net - Accessibility"
      metaDescription="Accessibility for Irish-Trad.net"
    >
      <Typography variant="h1">Accessibility</Typography>
      <Typography variant="body1">
        To improve accessibility on Irish-Trad.net you can use this page to
        change how content is displayed across all pages
      </Typography>
      <Box>
        <Typography variant="body1">Dyslexic Font: </Typography>
        <Button onClick={toggleDyslexicFontActive}>
          {dyslexicFontActive
            ? 'Turn Off Dyslexic Font'
            : 'Turn On Dyslexic Font'}
        </Button>
      </Box>
    </Page>
  )
}

export default Accessibility
