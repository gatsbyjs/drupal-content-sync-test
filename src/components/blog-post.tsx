import * as React from "react"

type BlogPostProps = {
  title: string
  description: string
  body: string
}

export const BlogPost: React.FunctionComponent<BlogPostProps> = ({
  title,
  description,
  body,
}) => (
  <>
    <h1>{title}</h1>

    {!!description && <p dangerouslySetInnerHTML={{ __html: description }} />}
    {!!body && <div dangerouslySetInnerHTML={{ __html: body }} />}
  </>
)