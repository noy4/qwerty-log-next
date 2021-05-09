import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h1 className="mt-16 text-3xl font-bold tracking-tighter mb-4">
      {children}
    </h1>
  )
}

export default PostTitle
