import React from 'react';
import { Outlet } from 'react-router-dom';
import { IoSettingsOutline } from 'react-icons/io5';
import Navbar from '../../components/Navbar/Navbar';
import { ThemeContext } from '../Theme/theme';

const Layout = () => {
  const { ThemeList, setTheme } = React.useContext(ThemeContext);
  return (
    <div className="drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">

        <div className="absolute  z-50 rounded-lg right-2 -top-2 flex ">

          <label htmlFor="my-drawer-4" className="drawer-button rounded-none rounded-b-lg  btn btn-primary ">
            <IoSettingsOutline className="animate-spin-slow" size={30} />
          </label>

        </div>
        <Navbar>
          <div className="container mx-auto md:px-4 px-2">
            <Outlet />
          </div>
        </Navbar>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay" />
        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
          {
            ThemeList.map((theme) => (
              <li key={theme}>
                <button
                  type="button"
                  onClick={
                  () => {
                    setTheme(theme);
                  }
                }
                >
                  <div data-theme={theme} className="bg-base-100 text-base-content w-full cursor-pointer font-sans">
                    <div className="grid grid-cols-5 grid-rows-3">
                      <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                        <div className="flex-grow text-sm font-bold">{theme}</div>
                        <div className="flex flex-shrink-0 flex-wrap gap-1">
                          <div className="bg-primary w-2 rounded" />
                          <div className="bg-secondary w-2 rounded" />
                          <div className="bg-accent w-2 rounded" />
                          <div className="bg-neutral w-2 rounded" />
                        </div>
                      </div>
                    </div>
                  </div>

                </button>
              </li>

            ))
          }

        </ul>
      </div>
    </div>
  );
};

export default Layout;
