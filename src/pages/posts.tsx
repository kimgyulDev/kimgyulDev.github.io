import GlobalStyle from 'components/Common/GlobalStyle'
import Header from 'components/Common/Header'
import React, { FunctionComponent } from 'react'

const posts: FunctionComponent = function () {
  return (
    <>
      <GlobalStyle />
      <Header />
      <div>posts</div>
    </>
  )
}

export default posts
