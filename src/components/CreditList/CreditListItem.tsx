import Link from "next/link"

import CreditEntry from "@/components/CreditList/CreditEntry"

type CreditListItemProps = {
  category: string
  credits: {
    name: string
    description: string
    link: string
  }[]
}

const CreditListItem = ({ category, credits }: CreditListItemProps) => (
  <>
    <Link href={`#${category.toLowerCase()}`}>
      <h2 className="text-2xl underline">{category}</h2>
    </Link>
    {credits.map(({ name, description, link }) => (
      <CreditEntry name={name} description={description} link={link} />
    ))}
  </>
)

export default CreditListItem
