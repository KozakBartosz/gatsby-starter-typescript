import React from 'react'
import Link from 'gatsby-link'
import { HelmetDatoCms } from 'gatsby-source-datocms'

const TemplateWrapper = (data) => (
  <article className="sheet">
    {console.log("datatata: ", data)}
    {/* <HelmetDatoCms favicon={data.data.site.siteMetadata.data.title} /> */}
    {/* <h1>{data.data.site.siteMetadata.title}</h1> */}
    {/* <p>{data.datoCmsAboutPage.subtitle}</p> */}
  </article>
)

export default TemplateWrapper

// export const query = graphql`
//   query LayoutQuery {
//     datoCmsSite {
//       faviconMetaTags {
//         ...GatsbyDatoCmsFaviconMetaTags
//       }
//     }
//   }
// `;

export const query = graphql`
    query MetaQuery {
        datoCmsSite {
            globalSeo {
                facebookPageUrl
                siteName
                titleSuffix
                twitterAccount
                fallbackSeo {
                    title
                    description
                    twitterCard
                }
            }
            faviconMetaTags {
                id
                tags
            }
        }
        site {
            siteMetadata {
                title
            }
        }
    }
`;
