import { render, cleanup } from '@testing-library/react'
import { HashRouter } from 'react-router-dom'
import DesktopHeader from '../DesktopHeader.component'

describe('DesktopHeader', () => {
  afterEach(() => {
    cleanup()
  })

  it('Snapshot', () => {
    const snapshot = render(
      <HashRouter>
        <DesktopHeader />
      </HashRouter>
    )

    expect(snapshot).toMatchSnapshot()
  })

  it('DesktopHeader should render all possible tabs', () => {
    const { getByText } = render(
      <HashRouter>
        <DesktopHeader />
      </HashRouter>
    )

    expect(getByText('Irish-Trad.net')).toBeInTheDocument()
    expect(getByText('Tablature')).toBeInTheDocument()
    expect(getByText('Lessons')).toBeInTheDocument()
    expect(getByText('Chords')).toBeInTheDocument()
    expect(getByText('Clef to Tab')).toBeInTheDocument()
    expect(getByText('Terminology')).toBeInTheDocument()
    expect(getByText('Community')).toBeInTheDocument()
    expect(getByText('Newsletter')).toBeInTheDocument()
  })
})
