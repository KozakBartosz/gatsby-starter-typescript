import React, { useState } from "react";
import { graphql } from "gatsby";
import Link from "gatsby-link";
import { HelmetDatoCms } from "gatsby-source-datocms";

// import { Layout } from '../components/layout';

// Please note that you can use https://github.com/dotansimha/graphql-code-generator
// to generate all types from graphQL schema
// interface IndexPageProps {
// 	data: {
// 		site: {
// 			siteMetadata: {
// 				title: string;
// 			};
// 		};
// 	};
// }

export default (data: any) => {
    const [count, setCount] = useState(0);

    return (
        <>
            {console.log("dato in index", data)}
            <HelmetDatoCms seo={data.data.datoCmsSeoMetaTags} />
            {/* <HelmetDatoCms favicon={data.data.site.siteMetadata.data.title} /> */}
            <h1>Hi people</h1>
            <div>
                <p>
                    {/* Welcome to your new <strong>{props.data.site.siteMetadata.title}</strong> site. */}
                </p>
                <p>Now go build something great.</p>
                <div>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <span>{count}</span>
                    <button onClick={() => setCount(count + 1)}>+</button>
                </div>
                <Link to="/kontakt/">Go to page {count * 20}</Link>
            </div>
            <p>{count * count}</p>
        </>
    );
};

// export const pageQuery = graphql`
// 	query IndexQuery {
// 		site {
// 			siteMetadata {
// 				title
// 			}
// 		}
// 	}
// `;

export const query = graphql`
    query MyQuery {
        site {
            siteMetadata {
                title
            }
        }
        datoCmsSeoMetaTags {
            ...GatsbyDatoCmsSeoMetaTags
        }
    }
`;

// const TemplateWrapper = (data) => (
//   <article className="sheet">
//     {console.log("datatata: ", data)}
//     {/* <HelmetDatoCms favicon={data.data.site.siteMetadata.data.title} /> */}
//     {/* <h1>{data.data.site.siteMetadata.title}</h1> */}
//     {/* <p>{data.datoCmsAboutPage.subtitle}</p> */}
//   </article>
// )
