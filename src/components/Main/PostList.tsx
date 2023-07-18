import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'

type PostListProps = {
  posts: PostListItemType[]
}

const PostWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  width: 100%;
`

const PostList: FunctionComponent<PostListProps> = function ({ posts }) {
  return (
    <PostWrapper>
      {posts.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostWrapper>
  )
}

export default PostList
