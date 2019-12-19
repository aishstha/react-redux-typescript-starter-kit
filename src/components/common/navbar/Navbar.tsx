import * as React from 'react';
import { NavLink } from 'react-router-dom';

import { REPORT } from '../../../constants/routes';

const Footer: React.SFC<{}> = () => {
  return (
    <nav className="navbar">
      <a className="navbar__brand">
        <img
          src="https://dd7tel2830j4w.cloudfront.net/f1566859019672x307263271968271740/JFIOlogo_beta.svg"
          alt=""
          className="brand-logo"
        />
      </a>
      <ul className="navbar__menu navbar__menu--primary">
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Dashboard
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Ingredients
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Products
          </a>
        </li>
        <NavLink activeClassName="active" className="menu-item" exact={true} to={REPORT}>
          <i /> <span className="menu-item-link">Report</span>
        </NavLink>
      </ul>

      <ul className="navbar__menu navbar__menu--sec">
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Knowledge Hub
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Settings{' '}
          </a>
        </li>
        <li className="menu-item">
          <a href="" className="menu-item-link">
            Logout
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
