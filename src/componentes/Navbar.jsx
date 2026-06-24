import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-10 text-sm">
      <NavLink 
        className={({ isActive }) => isActive ? "text-red-400 font-bold" : "hover:text-gray-300 transition"} 
        to="/"
      >
        Home
      </NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? "text-red-400 font-bold" : "hover:text-gray-300 transition"} 
        to="/recipes"
      >
        Recipes
      </NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? "text-red-400 font-bold" : "hover:text-gray-300 transition"} 
        to="/about"
      >
        About
      </NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? "text-red-400 font-bold" : "hover:text-gray-300 transition"} 
        to="/create-recipe"
      >
        Create Recipe
      </NavLink>
      <NavLink 
        className={({ isActive }) => isActive ? "text-red-400 font-bold" : "hover:text-gray-300 transition"} 
        to="/fav"
      >
        ❤️My Favorites
      </NavLink>
    </nav>
  )
}

export default Navbar