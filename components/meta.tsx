import Head from 'next/head'

const basePath = process.env.basePath

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
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta
        name="msapplication-config"
        content={basePath + '/favicon/browserconfig.xml'}
      />
      <meta name="theme-color" content="#ffffff" />
      {/* 
      <link
        rel="mask-icon"
        href={basePath + '/favicon/safari-pinned-tab.svg'}
        color="#000000"
      />
      <link rel="shortcut icon" href={basePath + '/favicon/qwerty-log.png'} />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta
        name="msapplication-config"
        content={basePath + '/favicon/browserconfig.xml'}
      />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={basePath + '/favicon/feed.xml'} /> */}
      <meta
        name="description"
        content="A statically generated blog using Next.js and Markdown, written by Qwerty."
      />
      <meta
        property="og:image"
        content={basePath + '/favicon/qwerty-log.png'}
      />
    </Head>
  )
}

export default Meta
