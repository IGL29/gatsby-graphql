import * as React from "react"
import { graphql } from "gatsby"

import { Layout } from "../components/Layout"
import { PostList } from "../components/PostList";
import Seo from "../components/seo"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <Seo title="Home" />
      <PostList data={data}/>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query MainPage {
    allMarkdownRemark {
      nodes {
        frontmatter {
          url
          title
          image {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
        id
      }
    }
  }
`
