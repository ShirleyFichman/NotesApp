import React from 'react';
import { useAuth } from '../context/AuthContext'; // Import the useAuth hook

const Navbar = () => {
  const { isAuthorized } = useAuth();

  return (
    <nav className="flex justify-between items-center px-4 py-2 bg-gray-100 shadow-sm">
      <div className="font-bold text-xl">
        <a href="/">Notes App</a>
      </div>

      <div>
        {isAuthorized ? (
          <a href="/logout" className='hover:font-bold'>Logout</a>
        ) : (
          <>
            <a href="/login" className='hover:font-bold'>Log in</a>
            <span> / </span>
            <a href="/register" className='hover:font-bold'>Register</a>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
