import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="flex flex-row justify-between mx-16 my-8">
      <h1 className="text-center text-4xl">Math Magicians</h1>
      <ul className="flex flex-row">
        <li className="px-3">
          <Link to="/">Home</Link>
        </li>
        <li className="px-3">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="px-3">
          <Link to="/quotes">Quote</Link>
        </li>
      </ul>
    </nav>

    <Outlet />
  </>
);

export default Header;
