import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

type Props = {}

let devMode: boolean

class Document extends NextDocument<Props> {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body
          className={`${
            process.env.NEXT_PUBLIC_DEVMODE && 'debug-screens'
          } scroll-smooth`}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
