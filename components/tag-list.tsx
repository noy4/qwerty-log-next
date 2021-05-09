import { TagIcon } from '@heroicons/react/solid'

type Props = {
  tags: string[]
}

const TagList = ({ tags }: Props) => {
  return (
    <>
      {tags && (
        <div className="flex items-center">
          <TagIcon className="w-5 h-5" />
          {tags.map((tag, index) => (
            <div
              className="bg-gray-900 text-white text-sm mx-0.5 px-2 rounded-sm"
              key={index}
            >
              {tag}
            </div>
          ))}
        </div>
      )}
    </>
  )
}

export default TagList
