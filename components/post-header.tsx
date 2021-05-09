import DateFormatter from './date-formatter'
import PostTitle from './post-title'
import TagList from './tag-list'

type Props = {
  title: string
  date: string
  tags: string[]
}

const PostHeader = ({ title, tags, date }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="flex items-center mb-1">
        <TagList tags={tags} />
        <div className="text-base text-gray-600 ml-auto">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  )
}

export default PostHeader
