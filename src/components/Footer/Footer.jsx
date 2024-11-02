import React from "react";
import "./Footer.css";
import twitter_icon from "../../assets/twitter_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import youtube_icon from "../../assets/youtube_icon.png";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://x.com/netflix"  target="_blank">
          <img src={twitter_icon} alt="" className="twitter_icon" />
        </a>
        <a href="https://www.facebook.com/netflix" target="_blank">
          <img src={facebook_icon} alt="" className="facebook-icon" />
        </a>
        <a href="https://www.instagram.com/netflix/" target="_blank">
          <img src={instagram_icon} alt="" className="instagram-icon" />
        </a>
        <a href="https://www.youtube.com/netflix" target="_blank">
          <img src={youtube_icon} alt="" className="youtube-icon" />
        </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li> Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>privacy</li>
        <p>&copy; 1997-2024 Netflix,Inc.</p>
      </ul>
    </div>
  );
};

export default Footer;
