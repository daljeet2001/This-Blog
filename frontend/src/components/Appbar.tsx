
import { Link } from 'react-router-dom'
import { Avatar } from './BlogCard'

const Appbar = () => {
  return (
    <div className="border-b flex justify-between items-center px-10 py-1 h-14">
      {/* Left - Logo */}
      <Link to={'/blogs'} className="flex items-center cursor-pointer text-lg font-semibold">
        Medium
      </Link>

      {/* Right - Button + Avatar */}
      <div className="flex items-center space-x-4">
        <Link to={'/publish'}>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800
            focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5"
          >
            Create
          </button>
        </Link>
        <Avatar name="Daljeet" />
      </div>
    </div>
  )
}

export default Appbar

