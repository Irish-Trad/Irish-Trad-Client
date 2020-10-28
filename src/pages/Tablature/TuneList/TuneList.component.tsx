import React from 'react'
import { Section, InternalLink } from './TuneList.styles'

type Props = {
  search: boolean
  tunes: Array<{ name: string; path: string }>
  searchValue: string
}

const TuneList: React.FC<Props> = ({ search, tunes, searchValue }) => (
  <Section>
    {search
      ? tunes
          .filter((el) =>
            el.name.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((el, idx) => (
            <InternalLink key={idx} href={el.path} target="_blank">
              {el.name}
            </InternalLink>
          ))
      : tunes.map((el, idx) => (
          <InternalLink key={idx} href={el.path} target="_blank">
            {el.name}
          </InternalLink>
        ))}
  </Section>
)

export default TuneList
