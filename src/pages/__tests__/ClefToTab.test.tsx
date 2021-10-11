import { render, cleanup } from '@testing-library/react'
import ClefToTab from '../ClefToTab/ClefToTab'
import { HashRouter } from 'react-router-dom'

const renderComponent = () => {
  return render(
    <HashRouter>
      <ClefToTab />
    </HashRouter>
  )
}

describe('ClefToTab', () => {
  afterEach(() => {
    cleanup()
  })

  it('Title of the page is ClefToTab', () => {
    const { getByText } = renderComponent()

    expect(getByText('Cleft to Tablature')).toBeInTheDocument()
  })
})
