import NavBar from '../../components/NavBar';
import React from 'react';

const PageLayout = ({ children }) => (
  <div className='w-full h-screen bg-gray-100'>
    <NavBar />
    <main>{children}</main>
  </div>
);

export default PageLayout;
