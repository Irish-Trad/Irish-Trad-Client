import { render, cleanup } from '@testing-library/react'
import Newsletter from '..'

describe('Newsletter', () => {
  afterEach(() => {
    cleanup()
  })

  it('Title of the page is Newsletter', () => {
    const { getByText } = render(<Newsletter />)

    expect(getByText('Newsletter')).toBeInTheDocument()
  })
})
