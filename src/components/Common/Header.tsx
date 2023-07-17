import React, { FunctionComponent, useState } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'
import { Link } from 'gatsby'

const HeaderWrapper = styled.nav`
  display: flex;
  width: 100%;
  height: 52px;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05);
  padding: 0 200px;
`
const BlogNameWrapper = css`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`
const BlogName = styled.span`
  color: #4e87dd;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`

const HeaderSnb = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 17px;
`

const HeaderLink = css`
  color: #4e87dd;
  font-size: 16px;
  font-weight: 400;
`

const SearchWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 11px;
`
const SearchInput = styled.input`
  border-radius: 17px;
  background: #edf0f5;
  padding: 5px 123px 5px 10px;
  border: 0;
`

const Nav: FunctionComponent = function () {
  const [lightMode, setLightMode] = useState(true)

  return (
    <HeaderWrapper>
      <Link to="/" css={BlogNameWrapper}>
        <span>🌊</span>
        <BlogName>kimgyulDev</BlogName>
      </Link>
      <HeaderSnb>
        <Link to="posts" css={HeaderLink}>
          Posts
        </Link>
        <Link to="review" css={HeaderLink}>
          Review
        </Link>
        <Link to="about" css={HeaderLink}>
          About
        </Link>
        <SearchWrapper>
          <label>🔎</label>
          <SearchInput placeholder="Search Keyword..."></SearchInput>
        </SearchWrapper>
        <div onClick={() => setLightMode(!lightMode)}>
          {lightMode ? '☀️' : '🌕'}
        </div>
      </HeaderSnb>
    </HeaderWrapper>
  )
}

export default Nav
