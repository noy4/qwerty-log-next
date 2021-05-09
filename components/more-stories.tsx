import Post from '../types/post'
import PostPreview from './post-preview'

type Props = {
  posts: Post[]
}

const MoreStories = ({ posts }: Props) => {
  return (
    <section>
      {posts.map((post) => (
        <PostPreview
          key={post.slug}
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
          author={post.author}
          slug={post.slug}
          excerpt={post.excerpt}
          tags={post.tags}
        />
      ))}
    </section>
  )
}

export default MoreStories
