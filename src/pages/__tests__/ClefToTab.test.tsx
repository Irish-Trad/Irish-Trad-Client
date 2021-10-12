import { render, cleanup } from '@testing-library/react'
import ClefToTab from 'pages/ClefToTab'
import { BrowserRouter } from 'react-router-dom'

const renderComponent = () => {
  return render(
    <BrowserRouter>
      <ClefToTab />
    </BrowserRouter>
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
