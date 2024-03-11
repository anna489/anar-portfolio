import React from "react";

const Header = () => {
  return (
    <div className="px-28 pt-10">
      <div className="navbar bg-[#23241f]">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Portfolio</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <details className="md:hidden">
                <summary>Home</summary>
                <ul className="p-2 bg-base-100 rounded-t-none">
                  <li>
                    <a>Home</a>
                  </li>
                  <li>
                    <a>About</a>
                  </li>
                  <li>
                    <a>Projects</a>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
