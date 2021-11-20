import * as React from "react"

import Layout from "../../components/Layout/Layout"
import Seo from "../../components/seo"
import { graphql, Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import './post.css';

const Post = ({data}) => {
  const { image, title } = data.markdownRemark.frontmatter;
  const { html } = data.markdownRemark;
  const img = getImage(image)

  return (
    <Layout>
      <Seo title="Пост 1" />
      <div>
        <Link className={'button'} to={'/'}>На главную</Link>
        <h1>{ title }</h1>
        <GatsbyImage alt={title} image={img} />
        <p dangerouslySetInnerHTML={{__html: html}} />
      </div>
    </Layout>
    )
}

export default Post

export const PostQuery = graphql`
query MyQuery($id: String) {
  markdownRemark(id: {eq: $id}) {
    html
    frontmatter {
      title
      url
      image {
        childImageSharp {
          gatsbyImageData(placeholder: BLURRED)
        }
      }
    }
  }
}
`
