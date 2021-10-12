import { render, cleanup } from '@testing-library/react'
import Chords from 'pages/Chords'
import { BrowserRouter } from 'react-router-dom'

describe('Chords', () => {
  afterEach(() => {
    cleanup()
  })

  it('Title of the page is Chords', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Chords />
      </BrowserRouter>
    )

    expect(getByText('Chords')).toBeInTheDocument()
  })
})
