import { Client } from '@notionhq/client'
import Link from 'next/link'
import slugify from 'slugify'

export default function Blogs(props) {
  const { blogs } = props

  return (
    <section className="py-base px-base flex flex-col">
      {/* <pre>{JSON.stringify(blogs, null, 2)}</pre> */}
      {blogs.map((blog) => (
        <Link key={blog} href={`/blogs/${slugify(blog).toLowerCase()}`}>
          <a>{blog}</a>
        </Link>
      ))}
    </section>
  )
}

export const getStaticProps = async () => {
  const notion = new Client({
    auth: process.env.NOTION_SECRET,
  })

  const data = await notion.blocks.children.list({
    block_id: process.env.PAGE_ID,
  })

  const blogs = []

  data.results.forEach((result: any) => {
    if (result.type === 'child_page') {
      blogs.push(result.child_page.title)
    }
  })

  return {
    props: {
      blogs,
    },
    revalidate: 60,
  }
}
