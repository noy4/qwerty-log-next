import { FunctionComponent, ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const Container: FunctionComponent = ({ children }: Props) => {
  return (
    <div className="container max-w-screen-md mx-auto px-5 sm:px-12">
      {children}
    </div>
  )
}

export default Container
