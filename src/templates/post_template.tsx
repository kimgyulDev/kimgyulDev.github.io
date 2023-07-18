import { graphql } from 'gatsby'
import React, { FunctionComponent } from 'react'

type PostTemplateProps = {}

const postTemplate: FunctionComponent<PostTemplateProps> = function (props) {
  console.log(props)
  return <div>postTemplate</div>
}

export default postTemplate

export const queryMarkdownDataBySlug = graphql`
  query queryMarkdownDataBySlug($slug: String) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          frontmatter {
            title
            summary
            date(formatString: "YYYY.MM.DD.")
            tags
            thumbnail {
              publicURL
            }
          }
        }
      }
    }
  }
`
