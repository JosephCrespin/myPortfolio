import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './SideDrawer.styles.scss';

const sideDrawer = ({ show, links, closeDrawer }) => {
  let drawerClasses = 'side-drawer';
  if (show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <ul>
        <li>
          <Link
            to='/'
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth',
              });
              closeDrawer();
            }}
          >
            home
          </Link>
        </li>
        {links}
      </ul>
    </nav>
  );
};

export default sideDrawer;
