import { MutableRefObject, useEffect, useMemo, useRef, useState } from 'react'
import { PostListItemType } from 'types/PostItem.types'

export type useInfiniteScrollType = {
  containerRef: MutableRefObject<HTMLDivElement | null>
  postList: PostListItemType[]
}

const NUMBER_OR_ITEMS_PER_PAGE = 10

const useInfiniteScroll = function (
  selectedTag: string,
  posts: PostListItemType[],
): useInfiniteScrollType {
  const containerRef: MutableRefObject<HTMLDivElement | null> =
    useRef<HTMLDivElement>(null)
  const [count, setCount] = useState<number>(1)

  const postListByTag = useMemo<PostListItemType[]>(
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

  const observer: IntersectionObserver = new IntersectionObserver(
    (entries, observer) => {
      if (!entries[0].isIntersecting) return

      setCount(value => value + 1)
      observer.disconnect()
    },
  )

  useEffect(() => setCount(1), [selectedTag])

  useEffect(() => {
    if (
      NUMBER_OR_ITEMS_PER_PAGE * count >= postListByTag.length ||
      containerRef.current === null ||
      containerRef.current.children.length === 0
    )
      return

    observer.observe(
      containerRef.current.children[containerRef.current.children.length - 1],
    )
  }, [count, selectedTag])

  return {
    containerRef,
    postList: postListByTag.slice(0, count * NUMBER_OR_ITEMS_PER_PAGE),
  }
}

export default useInfiniteScroll
