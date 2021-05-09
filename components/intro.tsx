const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-3xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8">
        Qwerty Log.
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        A statically generated blog using{' '}
        <a
          href="https://nextjs.org/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Next.js
        </a>{' '}
        and Markdown, written by{' '}
        <a
          href="https://twitter.com/noy_qwerty/"
          className="underline hover:text-success duration-200 transition-colors"
        >
          Qwerty
        </a>
        .
      </h4>
    </section>
  )
}

export default Intro
