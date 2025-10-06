import { NavLink } from 'react-router-dom';
import type { FC } from 'react';
import Logo from "./Logo";
import styles from './PageNav.module.css';
const PageNav: FC = () => {
  return (
  <nav className={styles.nav}>
      <Logo></Logo>
        <ul>
          
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
             <li>
                <NavLink to="/pricing">Pricing</NavLink>
            </li>
             <li>
                <NavLink to="/product">Product</NavLink>
            </li>
              <li>
                <NavLink to="/login">Login</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default PageNav;