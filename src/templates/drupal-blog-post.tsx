import * as React from "react"
import { graphql } from "gatsby"
import { BlogPost } from "../components/blog-post"


const DrupalBlogPost: React.FunctionComponent<{
  data: any
}> = ({ data }) => {
  const {
    title,
    body: { processed: body, summary: description },
  } = data.nodeArticle
  return <BlogPost title={title} body={body} description={description} />
}

export default DrupalBlogPost

export const query = graphql`
  query DrupalBlogPost($id: String!) {
    nodeArticle(id: { eq: $id }) {
      id
      title
      body {
        processed
        summary
      }
    }
  }
`