import React from "react";
import { Link} from "react-router-dom";
import "../styles/blog.css";

const NavBar = ({ onPress }) => {
  return (
    <div className="blog-post-navbar">
      <div className="blog-post-brand">
        <Link to="/">
          <img
            src="/logo_renace.png"
            alt="logo renace"
            width={250}
          />
        </Link>
      </div>
    </div>
  );
}; 

export default NavBar;
