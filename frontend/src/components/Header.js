import React from "react";
import "../components/styles/Header.css";
// import SearchIcon from "@material-ui/icons/Search";
// import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
// import LanguageIcon from '@material-ui/icons/Language';
// import {Avatar} from '@material-ui/core';
import { Link } from "react-router-dom";
import biglogo from '../images/biglogo.jpeg'
function Header() {
  const [hover, setHover] = React.useState(false);
  const onHover = () => {
    setHover(true);
  };
  const onLeave = () => {
    setHover(false);
  };

  return (
    <React.Fragment>
      <div
        className="header"
        // onMouseEnter={onHover}
        // onMouseLeave={onLeave}
        // style={{ height: hover ? 80 : null }}
      >
        <img src={biglogo} alt=""></img>
        <Link
          to="/"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
          
        >
          <img
            className="header_icon"
            src="https://image.flaticon.com/icons/png/512/20/20176.png"
            alt=""
          />
        </Link>
        <Link
          to="/Perfil"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            className="header_icon"
            src="https://image.flaticon.com/icons/png/512/64/64572.png"
            alt=""
          />
        </Link>
        <Link
          to="/Search"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            className="header_icon"
            src="https://cdn-icons-png.flaticon.com/512/1076/1076744.png"
            alt=""
          />          
        </Link>
        <Link
          to="/login"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            className="header_icon login"
            src="https://image.flaticon.com/icons/png/512/1828/1828391.png"
            alt=""
          />
        </Link>
        <Link
          to="/signin"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <img
            className="header_icon"
            src="https://image.flaticon.com/icons/png/512/3160/3160562.png"
            alt=""
          />
        </Link>
      </div>
    </React.Fragment>
  );
}

export default Header;
