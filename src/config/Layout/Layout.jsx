import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Waves from '../../components/Waves/Waves';

const Layout = () => (
  <main className="h-screen">
    <Waves />
    <Navbar>
      <div className="hero h-full w-full mt-[-20px] bg-transparent">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <Outlet />
          </div>
        </div>
      </div>
    </Navbar>
  </main>
);

export default Layout;
