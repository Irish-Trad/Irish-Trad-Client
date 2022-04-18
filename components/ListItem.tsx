import { FC } from 'react'
import Link from 'next/link'

import { User } from '../interfaces'

interface Props {
  data: User
}

const ListItem: FC<Props> = ({ data }) => (
  <Link href='/users/[id]' as={`/users/${data.id}`}>
    <a>
      {data.id}: {data.name}
    </a>
  </Link>
)

export default ListItem
