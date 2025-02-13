import React from 'react'
import styles from "./Footer.module.css"
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className={styles.footer_outer_container}>
      <div className={styles.footer_inner_container}>
        <div className={styles.footer_icons}>
          <FacebookOutlinedIcon />
          <InstagramIcon />
          <YouTubeIcon />
        </div>
        <div className={styles.footer_data}>
          <ul>
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notice</li>
          </ul>

          <div>
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Gift Cards</li>
              <li>Team of Use</li>
              <li>Corporate Information</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>Media Center</li>
              <li>Privacy</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>

        <div className={styles.service_code}>
          <p>Service Code</p>
        </div>

        <div className={styles.copy_write}>
          &copy; 1997-2024 Netflix, Inc.  All rights reserved.
        </div>
      </div>
    </div>
  );
}

export default Footer
