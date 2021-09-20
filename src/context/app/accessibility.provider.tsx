import { useState, createContext } from 'react'

export const AccessibilityContext = createContext({
  dyslexicFontActive: false,
  toggleDyslexicFontActive: () => {},
})

const AccessibilityProvider = ({ children }: { children: React.ReactNode }) => {
  const [dyslexicFontActive, setDyslexicFontActive] = useState(false)

  const toggleDyslexicFontActive = () =>
    setDyslexicFontActive(!dyslexicFontActive)

  return (
    <AccessibilityContext.Provider
      value={{
        dyslexicFontActive,
        toggleDyslexicFontActive,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  )
}

export default AccessibilityProvider
