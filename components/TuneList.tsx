import { FC } from 'react'

interface Props {
  search: boolean
  tunes: Array<{ name: string, path: string }>
  searchValue: string
}

const TuneList: FC<Props> = ({ search, tunes, searchValue }) => (
  <section>
    {search
      ? tunes
        .filter((el) =>
          el.name.toLowerCase().includes(searchValue.toLowerCase())
        )
        .map((el, idx) => (
          <a key={idx} href={el.path} target='_blank' rel='noreferrer'>
            {el.name}
          </a>
        ))
      : tunes.map((el, idx) => (
        <a key={idx} href={el.path} target='_blank' rel='noreferrer'>
          {el.name}
        </a>
      ))}
  </section>
)

export default TuneList
