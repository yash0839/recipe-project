import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-3 text-blue-400">
          <i className="ri-information-line mr-2"></i>
          Simple recipes made for real, actual, everyday life
        </h1>
        <p className="text-gray-300">
          <i className="ri-rocket-line mr-1"></i>
          Discover, share, and create amazing recipes
        </p>
      </div>

      <div className="bg-gray-700 rounded-lg p-5 mb-4">
        <h2 className="text-xl font-bold mb-2 text-blue-400">
          <i className="ri-flag-line mr-2"></i>
          Our Mission
        </h2>
        <p className="text-gray-300 text-sm leading-relaxed">
          We believe cooking brings people together. Our platform helps food lovers 
          discover new recipes, share their creations, and connect with cooks worldwide.
        </p>
      </div>

      <div className="bg-gray-700 rounded-lg p-5 mb-4">
        <h2 className="text-xl font-bold mb-3 text-blue-400">
          <i className="ri-gift-line mr-2"></i>
          What We Offer
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="bg-gray-600 p-3 rounded">
            <h3 className="font-bold text-sm">
              <i className="ri-book-2-line mr-1"></i>
              Recipe Collection
            </h3>
            <p className="text-gray-300 text-sm">Discover delicious recipes from various cuisines</p>
          </div>
          <div className="bg-gray-600 p-3 rounded">
            <h3 className="font-bold text-sm">
              <i className="ri-heart-line mr-1"></i>
              Favorites
            </h3>
            <p className="text-gray-300 text-sm">Save your favorite recipes for quick access</p>
          </div>
          <div className="bg-gray-600 p-3 rounded">
            <h3 className="font-bold text-sm">
              <i className="ri-user-add-line mr-1"></i>
              Create & Share
            </h3>
            <p className="text-gray-300 text-sm">Share your own recipes with the community</p>
          </div>
          <div className="bg-gray-600 p-3 rounded">
            <h3 className="font-bold text-sm">
              <i className="ri-search-line mr-1"></i>
              Smart Search
            </h3>
            <p className="text-gray-300 text-sm">Find recipes by ingredients or chef</p>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 rounded-lg p-5 mb-4">
        <h2 className="text-xl font-bold mb-3 text-blue-400">
          <i className="ri-settings-3-line mr-2"></i>
          How It Works
        </h2>
        <div className="space-y-3">
          <div className="flex gap-3">
            <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
            <div>
              <h3 className="font-bold text-sm">
                <i className="ri-book-open-line mr-1"></i>
                Browse Recipes
              </h3>
              <p className="text-gray-300 text-sm">Explore our collection of delicious recipes</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
            <div>
              <h3 className="font-bold text-sm">
                <i className="ri-edit-2-line mr-1"></i>
                Create & Share
              </h3>
              <p className="text-gray-300 text-sm">Add your own recipes with ingredients and photos</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="bg-orange-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
            <div>
              <h3 className="font-bold text-sm">
                <i className="ri-heart-3-line mr-1"></i>
                Save Favorites
              </h3>
              <p className="text-gray-300 text-sm">Heart your favorite recipes and access them anytime</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-700 rounded-lg p-5 mb-4">
        <h2 className="text-xl font-bold mb-2 text-blue-400">
          <i className="ri-tools-line mr-2"></i>
          Built With
        </h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-600 px-3 py-1 rounded-full text-xs">
            <i className="ri-reactjs-line mr-1"></i>
            React
          </span>
          <span className="bg-purple-600 px-3 py-1 rounded-full text-xs">
            <i className="ri-router-line mr-1"></i>
            React Router
          </span>
          <span className="bg-green-600 px-3 py-1 rounded-full text-xs">
            <i className="ri-css3-line mr-1"></i>
            Tailwind CSS
          </span>
          <span className="bg-yellow-600 px-3 py-1 rounded-full text-xs">
            <i className="ri-file-edit-line mr-1"></i>
            React Hook Form
          </span>
          <span className="bg-red-600 px-3 py-1 rounded-full text-xs">
            <i className="ri-cloud-line mr-1"></i>
            Axios
          </span>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-700 rounded-lg p-6 text-center">
        <h3 className="text-xl font-bold mb-2">
          <i className="ri-fire-line mr-2"></i>
          Ready to Start Cooking?
        </h3>
        <p className="text-gray-300 text-sm mb-3">Join our community and share your recipes!</p>
        <div className="flex gap-3 justify-center flex-wrap">
          <Link to="/recipes" className="bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded text-sm font-semibold">
            <i className="ri-book-open-line mr-1"></i>
            All Recipes
          </Link>
          <Link to="/create-recipe" className="bg-green-600 hover:bg-green-700 px-5 py-2 rounded text-sm font-semibold">
            <i className="ri-add-line mr-1"></i>
            Create Recipe
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About