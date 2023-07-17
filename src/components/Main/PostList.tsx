import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'

const POST_ITEM_DATA = {
  title: 'test1',
  date: '2023.07.12',
  tags: ['React'],
  summary: 'test summary',
  thumbnail: `https://img.onnada.com/2022/0202/5f21eef217.jpg`,
  link: 'https://namu.wiki/w/%EC%B9%98%EC%9D%B4%EC%B9%B4%EC%99%80',
}

const PostWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  width: 100%;
`

const PostList: FunctionComponent = function () {
  return (
    <PostWrapper>
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
      <PostItem {...POST_ITEM_DATA} />
    </PostWrapper>
  )
}

export default PostList
