import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Header = () => (
  <>
    <nav className="flex flex-row justify-between md:px-16 px-2 my-8 box-border">
      <h1 className="text-center md:text-4xl font-bold">Math Magicians</h1>
      <ul className="flex flex-col md:flex-row">
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
