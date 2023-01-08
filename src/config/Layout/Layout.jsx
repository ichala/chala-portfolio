import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

const Layout = () => (
  <main data-theme="halloween" className="h-screen bg-base-100">
    <Navbar>
      <div className="container mx-auto md:px-4 px-2">
        <Outlet />
      </div>
    </Navbar>
  </main>
);

export default Layout;
