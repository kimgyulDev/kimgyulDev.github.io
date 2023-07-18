import React, { FunctionComponent, ReactNode } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'

export type TagListProps = {
  selectedTag: string
  tagList: {
    [key: string]: number
  }
}

type TagItemProps = {
  active: boolean
}

type GatsbyLinkProps = {
  children: ReactNode
  className?: string
  to: string
} & TagItemProps

const TagListWapper = styled.div`
  text-align: right;
  display: flex;
  flex-direction: column;
  height: 100px;
`

const Tag = styled.div`
  color: #4e87dd;
  font-size: 17px;
  font-weight: 700;
  margin-bottom: 17px;
`
const TagItemList = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-evenly;
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const TagItem = styled(({ active, ...props }: GatsbyLinkProps) => (
  <Link {...props} />
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 5px;
  color: rgba(50, 93, 157, 0.49);
  font-size: 14px;
  font-weight: ${({ active }) => (active ? '700' : '400')};
`

const TagList: FunctionComponent<TagListProps> = function ({
  selectedTag,
  tagList,
}) {
  return (
    <TagListWapper>
      <Tag>🏷️ Tags</Tag>
      <TagItemList>
        {Object.entries(tagList).map(([name, count]) => {
          return (
            <TagItem
              to={`/?tag=${name}`}
              active={name === selectedTag}
              key={name}
            >
              {name}({count})
            </TagItem>
          )
        })}
      </TagItemList>
    </TagListWapper>
  )
}

export default TagList
