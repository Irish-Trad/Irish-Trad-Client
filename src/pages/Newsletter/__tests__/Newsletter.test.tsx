import { render, cleanup } from '@testing-library/react'
import Newsletter from '../Newsletter.component'

describe('Newsletter', () => {
  afterEach(() => {
    cleanup()
  })

  it('Title of the page is Newsletter', () => {
    const { getByText } = render(<Newsletter />)

    expect(getByText('Newsletter')).toBeInTheDocument()
  })
})
