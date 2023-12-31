export type PostFrontmatterType = {
  title: string
  date: string
  tags: string[]
  summary: string
  thumbnail: {
    publicURL: string
  }
}

export type PostListItemType = {
  node: {
    id: string
    fields: {
      slug: string
    }
    frontmatter: PostFrontmatterType
  }
}