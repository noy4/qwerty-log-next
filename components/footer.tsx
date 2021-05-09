import Link from 'next/link'
import Container from './container'

const Footer = () => {
  return (
    <footer className="bg-black">
      <Container>
        <div className="flex justify-center items-center pt-4 pb-8">
          <Link href="/">
            <a className="font-bold text-white">Home</a>
          </Link>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
