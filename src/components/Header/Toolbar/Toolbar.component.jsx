import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

import DrawerToggleButton from '../SideDrawer/DrawerToggleButton.component';
import './Toolbar.styles.scss';

const toolbar = ({ drawerClickHandler, isSideDrawerOpen, links }) => (
  <header className='toolbar'>
    <nav className='toolbar__navigation'>
      <div className={`toolbar__navigation__toggle-button`}>
        <DrawerToggleButton
          click={drawerClickHandler}
          isSideDrawerOpen={isSideDrawerOpen}
        />
      </div>
      <div className='toolbar__navigation__logo'>
        <Link
          to='/'
          onClick={() =>
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth',
            })
          }
        >
          <img  alt="aguacate" src="aguacate.png" width="65px"></img>
        </Link>
      </div>
      <div className='toolbar__navigation__items'>
        <ul>{links}</ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
