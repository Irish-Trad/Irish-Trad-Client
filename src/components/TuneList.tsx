import { Section, InternalLink } from './TuneList.styles'

type Props = {
  search: boolean
  tunes: Array<{ name: string; path: string }>
  searchValue: string
}

const TuneList = ({ search, tunes, searchValue }: Props) => (
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
