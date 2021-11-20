const path = require('path');

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query Post {
      allMarkdownRemark {
        nodes {
          frontmatter {
            url
          }
          id
        }
      }
    }
  `)

  data.allMarkdownRemark.nodes.forEach(node => {
    const { url } = node.frontmatter;
    const { id } = node;

    actions.createPage({
      path: `/${url}`,
      component: path.resolve('./src/templates/post/post.js'),
      context: { id }
    })
  })
}
