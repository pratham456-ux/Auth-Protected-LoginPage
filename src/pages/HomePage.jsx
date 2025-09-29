import React from 'react';
import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-amber-100 to-amber-50">
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Welcome to Our App</h1>

      <div className="flex space-x-6">
        <Link to='/signup'>
        <button className="px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300  ">
          Sign Up
        </button>
        </Link>

       <Link to='/login'>
        <button className="px-8 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300" >
          Login
        </button>
       </Link>
      </div>
    </div>
  );
}

export default HomePage;
