import React, { FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'

type PostListProps = {
  selectedTag: string
  posts: PostListItemType[]
}

const PostWrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  width: 100%;
`

const PostList: FunctionComponent<PostListProps> = function ({
  selectedTag,
  posts,
}) {
  const postListData = useMemo(
    () =>
      posts.filter(
        ({
          node: {
            frontmatter: { tags },
          },
        }: PostListItemType) =>
          selectedTag !== 'All' ? tags.includes(selectedTag) : true,
      ),
    [selectedTag],
  )
  return (
    <PostWrapper>
      {postListData.map(({ node: { id, frontmatter } }: PostListItemType) => (
        <PostItem {...frontmatter} link="https://www.google.co.kr/" key={id} />
      ))}
    </PostWrapper>
  )
}

export default PostList
