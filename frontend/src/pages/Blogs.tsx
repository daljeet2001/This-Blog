import BlogCard from '../components/BlogCard'
import Appbar from '../components/Appbar'
import{ useBlogs} from '../hooks/index'
import {BlogSkeleton1} from '../components/BlogSkeleton'

const Blogs = () => {
  const {loading,blogs}=useBlogs();

  if(loading){
    return <div>
      <Appbar/>
      <div className="flex justify-center">
        <div>
          <BlogSkeleton1/>
          <BlogSkeleton1/>
          <BlogSkeleton1/>
          <BlogSkeleton1/>
        </div>
      </div>
    </div>
    
  }
  return ( <div>
    <Appbar/>
  <div className="flex justify-center">
    <div className="max-w-xl">
    {blogs.map(blog=>
        <BlogCard
       authorName={blog.author.name}
       title={blog.title}
       content={blog.content}
       publishedDate="June 4,2025"
       id={blog.id}
      />
    )}

    </div>
    </div>
    </div>
  )
}

export default Blogs

