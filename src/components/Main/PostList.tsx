import React, { FunctionComponent, useMemo } from 'react'
import styled from '@emotion/styled'
import PostItem from './PostItem'
import { PostListItemType } from 'types/PostItem.types'
import useInfiniteScroll, {
  useInfiniteScrollType,
} from 'hooks/useInfiniteScroll'

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
  const { containerRef, postList }: useInfiniteScrollType = useInfiniteScroll(
    selectedTag,
    posts,
  )

  return (
    <PostWrapper ref={containerRef}>
      {postList.map(
        ({
          node: {
            id,
            fields: { slug },
            frontmatter,
          },
        }: PostListItemType) => (
          <PostItem {...frontmatter} link={slug} key={id} />
        ),
      )}
    </PostWrapper>
  )
}

export default PostList
