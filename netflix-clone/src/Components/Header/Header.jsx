import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const Header = () => {
  return (
    <>
      <div className="header-outer-container">
        <div className="header-container">
          <div className="left-header">
            <ul>
              {/* <li><img src={Netfex-Logo} alt='Netflex-Logo' width="100"/></li> */}
              <li>Netflix</li>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browser by Languages</li>
            </ul>
          </div>

          <div className="right-header">
            <ul>
              <li> <SearchIcon /></li>
              <li><NotificationsNoneIcon /> </li>
              <li><AccountBoxIcon /></li>
              <li><ArrowDropDownIcon /></li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
