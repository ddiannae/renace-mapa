import React from "react";
import { Link} from "react-router-dom";
import "../styles/blog.css";

const NavBar = ({ onPress }) => {
  return (
    <div className="blog-post-navbar">
      <div className="blog-post-brand">
        <Link to="/">
          <img
            src="https://infpmorena.mx/wp-content/uploads/2022/03/renace.png"
            alt="logo renace"
            width={512}
            height={100}
          />
        </Link>
      </div>
      <ul>
        <li>
          <Link to="crear-grupo">
            Registrar nuevo grupo
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
