import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = ({ data }) => (
  <Layout>

    <>
      <div className="flex flex-col">
        <h2>Drupal Blog posts</h2>
        {data.allNodeArticle.nodes.map(node => (
          <>
          <Link
            to={`/drupal-blog${node.path.alias}`}
            key={node.path.alias}
          >
            {node.title}
          </Link>
          <br></br>
          </>
        ))}
      </div>
    
    </>
  </Layout>
)

export default IndexPage

export const query = graphql`
  query HomepageQuery {
    allNodeArticle(sort: { fields: created, order: DESC }, limit: 3) {
      nodes {
        id
        title
        created
        path {
          alias
        }
      }
    }
  }
`
