import {useBlog} from "../hooks"
import {useParams} from "react-router-dom"
import {FullBlog} from "../components/FullBlog"
import Appbar from '../components/Appbar'
import {BlogSkeleton2} from '../components/BlogSkeleton'

const Blog = () => {
  const {id} =useParams();
  const { loading, blog } = useBlog({ id: id! });

  if(loading){
    return  <div>
      <Appbar/>
      <div className="flex justify-center">
        <div className="w-screen">
          <BlogSkeleton2/>
         
          
        </div>
      </div>
    </div>

  }
  return (
    <div>
    {blog ? (
      <FullBlog blog={blog} />
    ) : (
      <div className="flex justify-center">
      <div className="w-screen">
        <BlogSkeleton2/>
       
        
      </div>
    </div> 
    )}
  </div>
  )
}

export default Blog
