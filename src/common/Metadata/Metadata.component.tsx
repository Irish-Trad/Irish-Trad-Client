import { Helmet } from 'react-helmet'

type Props = {
  title?: string
  metaTitle?: string
  metaKeywords?: string
  metaDescription?: string
}

const Metadata: React.FC<Props> = ({
  title,
  metaTitle,
  metaKeywords,
  metaDescription,
}) => (
  <Helmet>
    <link rel="canonical" href={`${window.location}`} />
    {title ? <title>{title}</title> : null}
    {metaTitle ? <meta name="title" content={metaTitle} /> : null}
    {metaKeywords ? <meta name="keywords" content={metaKeywords} /> : null}
    {metaDescription ? (
      <meta name="description" content={metaDescription} />
    ) : null}
  </Helmet>
)

export default Metadata
