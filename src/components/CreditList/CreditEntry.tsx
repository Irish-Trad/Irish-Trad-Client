import Link from "next/link"

type CreditEntryProps = {
  name: string
  description: string
  link: string
}

const CreditEntry = ({ name, description, link }: CreditEntryProps) => (
  <ul>
    <li className="flex flex-col gap-2 rounded-3xl border p-4">
      <p>
        <span className="font-semibold">Name</span>: {name}
      </p>
      <p>
        <span className="font-semibold">Credit</span>: {description}
      </p>
      <Link href={link} target="_blank" rel="noreferrer">
        {link}
      </Link>
    </li>
  </ul>
)

export default CreditEntry
