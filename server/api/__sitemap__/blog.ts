import { serverQueryContent } from '#content/server'

export default defineSitemapEventHandler(async (event) => {
  const contentList = await serverQueryContent(event)
    .where({ draft: { $not: true } })
    .sort({ date: -1 })
    .only(['title', 'lastUpdated', 'categories', '_path'])
    .find()

  const postUrls = contentList.map((c) => {
    return asSitemapUrl({
      loc: c._path,
      lastmod: new Date(), // TODO: Use a last updated frontmatter field
    })
  })

  const categories = contentList
    .flatMap((post) => {
      return post.categories
    })

  const categoryUrls = categories.map((category) => {
    const recentPost = contentList.filter((post) => {
      if (!post.categories)
        return false
      return post.categories.includes(category)
    }).sort((a, b) => b.lastUpdated - a.lastUpdated)[0]

    return asSitemapUrl({
      loc: `/category/${category}`,
      lastmod: recentPost.lastUpdated || new Date(), // TODO: Use a last updated frontmatter field
    })
  })

  return [...postUrls, ...categoryUrls]
})
