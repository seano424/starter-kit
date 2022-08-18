import { Client } from '@notionhq/client'
import slugify from 'slugify'

export default function Blog(props) {
  const { blog, body } = props
  return (
    <>
      <pre>{JSON.stringify(body, null, 2)}</pre>
    </>
  )
}

export async function getStaticPaths() {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  })

  const paths = []

  data.results.forEach((result: any) => {
    if (result.type === 'child_page') {
      paths.push({
        params: {
          slug: slugify(result.child_page.title).toLowerCase(),
        },
      })
    }
  })

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  })

  const page = data.results.find((result: any) => {
    if (result.type === 'child_page') {
      const { title } = result.child_page
      const resultSlug = slugify(title).toLowerCase()
      return resultSlug === slug
    }
    return false
  })

  const blocks = await notion.blocks.children.list({
    block_id: page.id,
  })

  const body = []

  blocks.results.forEach((block: any) => {
    if (block.type === 'paragraph') {
      body.push(block.paragraph.rich_text[0].text.content)
    }
  })

  return {
    props: {
      blog: blocks,
      body,
    },
  }
}
