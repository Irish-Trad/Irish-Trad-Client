import { render, cleanup } from '@testing-library/react'
import Terminology, { terms } from 'pages/Terminology'

describe('Terminology', () => {
  afterEach(() => {
    cleanup()
  })

  it('User will see Terminology as a title and terminologies', () => {
    const { getByText } = render(<Terminology />)

    expect(getByText(`Terminology`)).toBeInTheDocument()

    for (const term of terms) {
      expect(getByText(`${term.term}:`)).toBeInTheDocument()
    }
  })
})
