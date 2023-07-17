import React, { FunctionComponent } from 'react'
// import { Link } from 'gatsby'
import stlyed from '@emotion/styled'

import GlobalStyle from 'components/Common/GlobalStyle'
import Introduction from 'components/Main/Introduction'
import Header from 'components/Common/Header'
import Footer from 'components/Common/Footer'
import TagList from 'components/Main/TagList'
import PostList from 'components/Main/PostList'

const TAG_LIST = {
  All: 5,
  Javascript: 3,
  React: 2,
}

const Container = stlyed.div`
  display: flex;
  // flex-direction: column;
  height: 100%;
  padding: 0 200px;
  position: relative;
  top: 80px;
`
const LeftLayout = stlyed.div`
  margin-right: 100px;
  height: 50%;
`
const RightLayout = stlyed.div`
  margin-left: 100px;
  height: 50%;
`

const IndexPage: FunctionComponent = function () {
  return (
    <>
      <Header />
      <Container>
        <GlobalStyle />
        <LeftLayout>
          <Introduction />
        </LeftLayout>
        <PostList />
        <RightLayout>
          <TagList selectedTag="All" tagList={TAG_LIST} />
        </RightLayout>
      </Container>
      <Footer />
    </>
  )
}

export default IndexPage
