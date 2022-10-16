import * as React from 'react'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import previewImage from '../../static/meta.jpg'

import { SeoProps } from './index'

import '../../styles/styles.scss'

const SEO: React.FunctionComponent<SeoProps> = ({
  description,
  lang,
  meta = [],
  keywords,
  title,
}): JSX.Element => (
  <StaticQuery
    query={detailsQuery}
    render={data => {
      const metaDescription = description || data.site.siteMetadata.description
      const metaTitle = title || data.site.siteMetadata.title
      const image = `https://revat-meta.netlify.com${previewImage}`

      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={metaTitle}
          titleTemplate={`%s`}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              name: 'name',
              content: metaTitle,
            },
            {
              name: 'image',
              content: image,
            },
            {
              property: 'og:title',
              content: metaTitle,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:image',
              content: image,
            },
            {
              name: 'twitter:card',
              content: 'Teonica web agency',
            },
            {
              name: 'twitter:creator',
              content: data.site.siteMetadata.author,
            },
            {
              name: 'twitter:title',
              content: metaTitle,
            },
            {
              name: 'twitter:description',
              content: metaDescription,
            },
            {
              name: 'twitter:image',
              content: image,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: 'keywords',
                    content: keywords.join(', '),
                  }
                : []
            )
            .concat(meta)}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:400,500,600,700,900"
            rel="stylesheet"
          />
        </Helmet>
      )
    }}
  />
)

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  keywords: [''],
}

export default SEO

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
