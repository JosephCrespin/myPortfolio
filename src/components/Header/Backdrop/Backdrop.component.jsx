import React from "react";

import "./Backdrop.styles.scss";

const backdrop = ({ closeDrawer }) => (
  <div className="backdrop" onClick={closeDrawer}>
    <span>✕</span>
  </div>
);

export default backdrop;
