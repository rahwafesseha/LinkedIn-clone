import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css"

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img
          src="https://blog.hubspot.com/hubfs/GettyImages-1177482693.jpg"
          alt=""
        />
        <Avatar className="sidebar_avatar" />
        <h2>Rahwa Ghebremichael</h2>
        <h4>rahwa.shiden@gmail.com</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statNumber">500</p>
        </div>
        <div className="sidebar_stat">
          <p>Views on post</p>
          <p className="sidebar_statNumber">1520</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
      </div>
    </div>
  );
}

export default Sidebar;
