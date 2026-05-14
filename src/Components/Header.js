import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { useGlobalContext } from '../context';
import MenuToggleButton from '../MenuToggleButton';
import '../index.css';

const Header = () => {
  const { isMenuOpen, authStatus } = useGlobalContext();

  return (
    <header className="header">
      <Link to="/" className="logo">
        Lumin
      </Link>

      <nav className={isMenuOpen ? 'menu-open' : 'menu-close'}>
        <Link className="nav-link" to="/aboutus">
          About Us
        </Link>
        <HashLink className="nav-link" smooth to="/#product">
          Product
        </HashLink>
        <HashLink className="nav-link" smooth to="/#courses">
          Our Courses
        </HashLink>
        <HashLink className="nav-link" smooth to="/#contactus">
          Contact Us
        </HashLink>
      </nav>

      <div className="login">
        {authStatus ? (
          <Link to="/userprofilepage" className="nav-link login-but">
            My Profile
          </Link>
        ) : (
          <Link to="/login" className="nav-link login-but">
            Login
          </Link>
        )}
      </div>

      <MenuToggleButton />
    </header>
  );
};

export default Header;
