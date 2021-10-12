import { render, cleanup } from '@testing-library/react'
import Terminology from 'pages/Terminology'

describe('Terminology', () => {
  afterEach(() => {
    cleanup()
  })

  it('User will see Terminology as a title and terminologies', () => {
    const { getByText, getAllByText } = render(<Terminology />)

    expect(getByText('Terminology')).toBeInTheDocument()
    expect(getByText('Arpeggio:')).toBeInTheDocument()
    expect(
      getByText('The notes of a chord played individually.')
    ).toBeInTheDocument()
    expect(getByText('GDAE:')).toBeInTheDocument()
    expect(
      getAllByText(
        'Tuning of the Irish Bouzouki from lowest pitched to highest pitched string.'
      )
    ).toHaveLength(2)
    expect(getByText('Vibrato:')).toBeInTheDocument()
    expect(
      getByText(
        'Quick and repetitive micro-bends that create a fluctuating pitch. Reminiscent of a vocalist who holds a note for a long time.'
      )
    ).toBeInTheDocument()
  })
})
