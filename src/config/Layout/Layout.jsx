import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Layout = () => (
  <main data-theme="halloween" className="h-screen bg-base-300">
    <Navbar>
      <div className="container mx-auto md:p-16 px-4">
        <Outlet />
      </div>
    </Navbar>
  </main>
);

export default Layout;
