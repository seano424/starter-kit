import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import Menu from './Menu'

export default function Layout({ children }) {
  const title = 'My Little Starter Kit'
  return (
    <div className="flex min-h-screen flex-col bg-light font-open dark:bg-dark dark:text-blue-50">
      <Head>
        <title>{title}</title>
        <meta name="description" content={title} />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Menu />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
