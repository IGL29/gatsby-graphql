import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import * as React from "react"
import './PostList.css';

const PostList = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;

  return (
    <ul className={"post-list"}>
      {nodes.map(post => {
        const { image, title, url } = post.frontmatter
        const img = getImage(image)
        const link = `/${url}`

        return (
          <li className={"post-item"} key={post.id}>
            <Link className={'link'} to={link}>
              <h2 className={'title'}>{title}</h2>
              <GatsbyImage className={'img'} image={img} alt={title} />
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default PostList;
