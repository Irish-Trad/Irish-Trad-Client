import { render, cleanup } from '@testing-library/react'
import Lessons from 'pages/Lessons'
import { BrowserRouter } from 'react-router-dom'

const renderComponent = () =>
  render(
    <BrowserRouter>
      <Lessons />
    </BrowserRouter>
  )

describe('Lessons', () => {
  afterEach(() => {
    cleanup()
  })

  it('Title of the page is Lessons', () => {
    const { getByText } = renderComponent()

    expect(getByText('Lessons')).toBeInTheDocument()
  })
})
