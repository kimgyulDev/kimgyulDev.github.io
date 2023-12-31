import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import { Link } from 'gatsby'
import { PostFrontmatterType } from 'types/PostItem.types'

type PostItemProps = PostFrontmatterType & { link: string }

const PostItemWrapper = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  height: 130px;
  }
`
const ThumbnailImage = styled.img`
  width: 150px;
  height: 100%;
  object-fit: cover;
  margin-left: 60px;
`
const PostItemContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
const Title = styled.div`
  display: -webkit-box;
  overflow: hidden;
  text-overflow: ellipsis;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 23px;
  font-weight: 700;
`
const Date = styled.div`
  font-size: 13px;
  font-weight: 300;
  opacity: 0.5;
`
const TopItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`
const PostTagList = styled.div`
  display: flex;
  width: 25%;
`
const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 9px;
  background: #deebff;
  margin-bottom: 10px;
  margin-right: 10px;
`
const TagItem = styled.div`
  margin: 2px 6px;
  text-align: right;
  color: #4e87dd;
  font-size: 9px;
  font-weight: 500;
  letter-spacing: 0.5px;
`
const Summary = styled.div`
  display: -webkit-box;
  margin: 10px 0;
  text-overflow: ellipsis;
  white-space: normal;
  overflow-wrap: break-word;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-size: 14px;
  opacity: 0.8;
  letter-spacing: 0.5px;
`

const PostItem: FunctionComponent<PostItemProps> = function ({
  title,
  date,
  tags,
  summary,
  thumbnail: { publicURL },
  link,
}) {
  return (
    <PostItemWrapper to={link}>
      <PostItemContent>
        <TopItem>
          <Title>{title}</Title>
          <Date>{date}</Date>
        </TopItem>
        <Summary>{summary}</Summary>
        <PostTagList>
          {tags.map((tag, i) => (
            <Tag>
              <TagItem>{tags[i]}</TagItem>
            </Tag>
          ))}
        </PostTagList>
      </PostItemContent>
      <ThumbnailImage src={publicURL}></ThumbnailImage>
    </PostItemWrapper>
  )
}

export default PostItem
