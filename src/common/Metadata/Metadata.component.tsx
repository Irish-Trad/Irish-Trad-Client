import * as React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title?: string
  metaTitle?: string
  metaKeywords?: string
  metaDescription?: string
}

const Metadata: React.FunctionComponent<Props> = ({
  title,
  metaTitle,
  metaKeywords,
  metaDescription
}: Props) => (
  <Helmet>
    {title ? <title>{title}</title> : null}
    {metaTitle ? <meta name="title" content={metaTitle} /> : null}
    {metaKeywords ? <meta name="keywords" content={metaKeywords} /> : null}
    {metaDescription ? (
      <meta name="description" content={metaDescription} />
    ) : null}
  </Helmet>
)

export default Metadata
