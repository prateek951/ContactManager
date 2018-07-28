import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Header = props => {
  // console.log(props.brand);
  const { brand } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <Link to="/" className="navbar-brand">
            {brand}
          </Link>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  <i className="fas fa-home" />
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contacts/add" className="nav-link">
                  <i className="fas fa-plus" />
                  Add Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  <i className="fas fa-question" />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

//Setting the default props

Header.defaultProps = {
  brand: "Contact Manager"
};

Header.propTypes = {
  brand: PropTypes.string.isRequired
};

export default Header;
