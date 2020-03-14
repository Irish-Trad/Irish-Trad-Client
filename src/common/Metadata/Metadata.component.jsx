import React from 'react'
import { Helmet } from 'react-helmet'

const Metadata = ({ title, metaTitle, metaKeywords, metaDescription }) => (
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
