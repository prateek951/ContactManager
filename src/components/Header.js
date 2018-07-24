import React from "react";
import PropTypes from "prop-types";

const Header = props => {
  // console.log(props.brand);
  const { brand } = props;
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
        <div className="container">
          <a href="/" className="navbar-brand">
            {brand}
          </a>
          <div>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <a href="/" className="nav-link">
                  Home
                </a>
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
