import React from "react";
import styles from "./Header.module.css";
import NetflixLogo from"../../assets/images/netflix-3.svg"
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <>
      <div className={`${styles.header_outer_container}`}>
        <div className={styles.header_container}>
          <div className={styles.left_header}>
            <ul>
              <li><img src={NetflixLogo} alt='Netflex-Logo' width="100"/></li>
              <li>Home</li>
              <li>TV Shows</li>
              <li>Movies</li>
              <li>Latest</li>
              <li>My List</li>
              <li>Browser by Languages</li>
            </ul>
          </div>

          <div className={styles.right_header}>
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
