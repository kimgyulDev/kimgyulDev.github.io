import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'

const FooterWrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: auto;
  padding: 50px 0;
  font-size: 12px;
  text-align: center;
  line-height: 1.5;
  opacity: 50%;
`

const Footer: FunctionComponent = function () {
  return (
    <FooterWrapper>
      Thank You for Visiting My Blog, Have a Good Day 😆
      <br />© 2023 Developer Jiyul, Powered By Gatsby.
    </FooterWrapper>
  )
}

export default Footer
