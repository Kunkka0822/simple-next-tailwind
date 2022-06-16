import React from 'react';
import Link from 'next/link';

const NavBar = () => (
  <nav className="w-full z-10 bg-white">
    <div className="w-full mx-auto flex flex-wrap items-center justify-between mt-0 py-2 px-10">
      <div className='flex flex-row items-center'>
        <img src="./static/images/avatar.png"/>
        <div className='pl-4 text-3xl'>
          Partner Reporting Package
        </div>
      </div>
      <ul className='flex justify-center text-xl'>
        <li className='p-3 hover:text-gray-200 ease-in duration-200'>
          <Link href="/partner">
            <a>Partners</a>
          </Link>
        </li>
        <li className='p-3 hover:text-gray-200 ease-in duration-200'>
          <Link href="/report">
            <a>Reports</a>
          </Link>
        </li>
        <li className='p-3 hover:text-gray-200 ease-in duration-200'>
          <Link href="/add">
            <a>Add Partner</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
