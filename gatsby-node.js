/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

const createDrupalPages = async gatsbyApi => {
  const { graphql, actions } = gatsbyApi
  const articleQueryResult = await graphql(/* GraphQL */ `
    query DrupalArticlePosts {
      allNodeArticle {
        nodes {
          id
          title
          path {
            alias
          }
          promote
        }
      }
    }
  `)

  const { nodes } = articleQueryResult.data.allNodeArticle


  console.log({nodes})
  nodes.forEach(post => {
    actions.createPage({
      path: `/drupal-blog${post.path.alias}`,
      context: {
        id: post.id,
      },
      component: require.resolve(`./src/templates/drupal-blog-post.tsx`),
    })
  })
}

exports.createPages = async (gatsbyApi, pluginOptions) => {
    const fns = [createDrupalPages]
    await Promise.all(fns.map(fn => fn(gatsbyApi, pluginOptions)))
  }