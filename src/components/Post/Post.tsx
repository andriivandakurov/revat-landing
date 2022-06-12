import * as React from 'react'
import { Link } from 'gatsby'
import { PostProps } from '.'

import SEO from '../Seo/Seo'

const Post: React.FunctionComponent<PostProps> = (
  props: PostProps
): JSX.Element => (
  <div>
    <SEO
      title={props.pageContext.data.title}
      keywords={[props.pageContext.data.title]}
    />

    <Link to="/">Go back</Link>

    {props.pageContext.data.title}
  </div>
)

export default Post
