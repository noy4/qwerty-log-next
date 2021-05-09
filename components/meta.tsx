import Head from 'next/head'

const basePath = process.env.basePath

const description =
  'A statically generated blog using Next.js and Markdown, written by Qwerty.'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={basePath + '/favicon/apple-touch-icon.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={basePath + '/favicon/favicon-32x32.png'}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={basePath + '/favicon/favicon-16x16.png'}
      />
      <link rel="manifest" href={basePath + '/favicon/site.webmanifest'} />
      <link
        rel="mask-icon"
        href={basePath + '/favicon/safari-pinned-tab.svg'}
        color="#000"
      />
      <meta name="msapplication-TileColor" content="#000" />
      <meta
        name="msapplication-config"
        content={basePath + '/favicon/browserconfig.xml'}
      />
      <meta name="theme-color" content="#000" />

      <meta name="description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@noy_qwerty" />
      <meta property="og:url" content="https://noy4.github.io/qwerty-log/" />
      <meta property="og:title" content="Qwerty Log" />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://noy4.github.io/qwerty-log/favicon/apple-touch-icon.png"
      />
    </Head>
  )
}

export default Meta
