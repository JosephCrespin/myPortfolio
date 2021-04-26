import React from "react";

import "./DrawerToggleButton.styles.scss";

const drawerToggleButton = ({ click, isSideDrawerOpen }) => {
  const fadeButton = isSideDrawerOpen ? "color-bg-dark1" : "";
  return (
    <button className="toggle-button" onClick={click}>
      <div className={`toggle-button__line ${fadeButton}`} />
      <div className={`toggle-button__line ${fadeButton}`} />
      <div className={`toggle-button__line ${fadeButton}`} />
    </button>
  );
};

export default drawerToggleButton;
