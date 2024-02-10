import {Link, NavLink} from "react-router-dom"
import { React ,useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import logo from '../Images/Logo.png';

function Nav() {
  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};
  return (
    <header>
         <Link className="logo" to="/"><img src={logo} alt="logo" /></Link>
      <nav ref={navRef}>

              <NavLink className="nav"  to="/">  الصفحة الرئيسية</NavLink>

              <NavLink className="nav" to="/حجز موعد">حجز موعد</NavLink>

              <NavLink className="nav" to="/تواصل">تواصل</NavLink>

              <NavLink className="nav" to="/حول العيادة">حول العيادة</NavLink>

          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
      </nav>
        <button
          className="nav-btn"
          onClick={showNavbar}>
          <FaBars />
       </button>
    </header>
  )
}

export default Nav