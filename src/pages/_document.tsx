import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        
        <meta
          name="description"
          content="This is the portfolio of Luis Ángel Arvelo frontend developer and founding member of the 7 Street Labs team"
        />
        <meta name="robots" content="index/follow" />
        <link rel="icon" href="/src/public/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}