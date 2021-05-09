import Link from 'next/link'
import Author from '../types/author'
import DateDistance from './date-distance'
import TagList from './tag-list'

type Props = {
  title: string
  coverImage: string
  date: string
  excerpt: string
  author: Author
  slug: string
  tags: string[]
}

const PostPreview = ({ title, tags, date, slug }: Props) => {
  return (
    <div>
      <h3 className="text-2xl mb-1 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <div className="flex items-center mb-6">
        <TagList tags={tags} />
        <div className="text-base ml-auto text-gray-600">
          <DateDistance dateString={date} />
        </div>
      </div>
    </div>
  )
}

export default PostPreview
