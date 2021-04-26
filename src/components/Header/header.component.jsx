import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import './header.styles.scss';
import Toolbar from './Toolbar/Toolbar.component';
import SideDrawer from './SideDrawer/SideDrawer.component';
import Backdrop from './Backdrop/Backdrop.component';

class Header extends Component {
  constructor() {
    super();
    this.state = {
      isSideDrawerOpen: false,
    };
  }
  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return { isSideDrawerOpen: !prevState.isSideDrawerOpen };
    });
  };

  closeDrawer = () => {
    this.setState({ isSideDrawerOpen: false });
  };

  render() {
    const links = [
      ['projects', '/#projects'],
      ['about me', '/#about-me'],
      ['blog', '/blog'],
      ['contact', '/#contact'],
    ].map((link, index) => (
      <li key={index}>
        <Link smooth to={link[1]} onClick={this.closeDrawer}>
          {link[0]}
        </Link>
      </li>
    ));

    let backdrop;

    if (this.state.isSideDrawerOpen) {
      backdrop = <Backdrop closeDrawer={this.closeDrawer} />;
    }
    return (
      <React.Fragment>
        <div className='header__wave'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            id='header-wave'
            viewBox='0 0 800 338.05'
            preserveAspectRatio='none'
          >
            <path>
            <animate 
              attributeName="d"
              values="M0,160L20,165.3C40,171,80,181,120,192C160,203,200,213,240,208C280,203,320,181,360,176C400,171,440,181,480,197.3C520,213,560,235,600,250.7C640,267,680,277,720,245.3C760,213,800,139,840,101.3C880,64,920,64,960,96C1000,128,1040,192,1080,224C1120,256,1160,256,1200,234.7C1240,213,1280,171,1320,149.3C1360,128,1400,128,1420,128L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z;M0,160L20,133.3C40,107,80,53,120,69.3C160,85,200,171,240,192C280,213,320,171,360,154.7C400,139,440,149,480,149.3C520,149,560,139,600,138.7C640,139,680,149,720,170.7C760,192,800,224,840,202.7C880,181,920,107,960,101.3C1000,96,1040,160,1080,192C1120,224,1160,224,1200,202.7C1240,181,1280,139,1320,106.7C1360,75,1400,53,1420,42.7L1440,32L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z;M0,160L20,176C40,192,80,224,120,208C160,192,200,128,240,122.7C280,117,320,171,360,181.3C400,192,440,160,480,128C520,96,560,64,600,42.7C640,21,680,11,720,53.3C760,96,800,192,840,229.3C880,267,920,245,960,213.3C1000,181,1040,139,1080,154.7C1120,171,1160,245,1200,250.7C1240,256,1280,192,1320,160C1360,128,1400,128,1420,128L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z;M0,160L20,165.3C40,171,80,181,120,192C160,203,200,213,240,208C280,203,320,181,360,176C400,171,440,181,480,197.3C520,213,560,235,600,250.7C640,267,680,277,720,245.3C760,213,800,139,840,101.3C880,64,920,64,960,96C1000,128,1040,192,1080,224C1120,256,1160,256,1200,234.7C1240,213,1280,171,1320,149.3C1360,128,1400,128,1420,128L1440,128L1440,0L1420,0C1400,0,1360,0,1320,0C1280,0,1240,0,1200,0C1160,0,1120,0,1080,0C1040,0,1000,0,960,0C920,0,880,0,840,0C800,0,760,0,720,0C680,0,640,0,600,0C560,0,520,0,480,0C440,0,400,0,360,0C320,0,280,0,240,0C200,0,160,0,120,0C80,0,40,0,20,0L0,0Z"
              dur="20s"
              calcMode="spline"
              keyTimes="0 ; 0.33 ; 0.66 ; 1"
              keySplines="0.17 0.67 0.83 0.67 ; 0.17 0.67 0.83 0.67 ; 0.17 0.67 0.83 0.67"
              repeatCount="indefinite" />
            </path>
          </svg>
        </div>
        <Toolbar
          drawerClickHandler={this.drawerToggleClickHandler}
          isSideDrawerOpen={this.state.isSideDrawerOpen}
          links={links}
        />
        <SideDrawer
          show={this.state.isSideDrawerOpen}
          links={links}
          closeDrawer={this.closeDrawer}
        />
        {backdrop}
      </React.Fragment>
    );
  }
}

export default Header;
