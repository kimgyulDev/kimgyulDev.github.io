import React, { FunctionComponent } from 'react'
// import { Link } from 'gatsby'
import stlyed from '@emotion/styled'

import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import TagList from 'components/Main/TagList'
import PostList from 'components/Main/PostList'

import { graphql } from 'gatsby'
import { PostListItemType } from 'types/PostItem.types'
import queryString, { ParsedQuery } from 'query-string'

type IndexPageProps = {
  location: {
    search: string
  }
  data: {
    allMarkdownRemark: {
      edges: PostListItemType[]
    }
  }
}

const TAG_LIST = {
  All: 5,
  Javascript: 3,
  React: 2,
}

const Container = stlyed.div`
  display: flex;
  // flex-direction: column;
  height: 100vh;
  padding: 0 15em;
  position: relative;
  top: 8em;
  margin-bottom: 100px;
`
const LeftLayout = stlyed.div`
  margin-right: 100px;
  height: 50%;
`
const RightLayout = stlyed.div`
  margin-left: 100px;
  height: 50%;
`

const IndexPage: FunctionComponent<IndexPageProps> = function ({
  location: { search },
  data: {
    allMarkdownRemark: { edges },
  },
}) {
  const parsed: ParsedQuery<string> = queryString.parse(search)
  const selectedTag: string =
    typeof parsed.tag !== 'string' || !parsed.tag ? 'All' : parsed.tag

  return (
    <>
      <Header />
      <Container>
        <GlobalStyle />
        <LeftLayout>
          <Introduction />
        </LeftLayout>
        <PostList posts={edges} />
        <RightLayout>
          <TagList selectedTag={selectedTag} tagList={TAG_LIST} />
        </RightLayout>
      </Container>
      <Footer />
    </>
  )
}

export const getPostList = graphql`
  query getPostList {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date, frontmatter___title] }
    ) {
      edges {
        node {
          id
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

export default IndexPage
