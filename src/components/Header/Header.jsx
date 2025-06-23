import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="college-name">
          <p className="p" href="/HomePage" data-discover="true">Vivekanand college</p>
        </div>
        <nav className="navbar">
          <ul>
            {[
              { path: '/', label: 'Home' },
              { path: '/about', label: 'About' },
              { path: '/courses', label: 'Courses' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <li key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to={item.path}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <a href="/admission" className="apply-now-btn">Apply Now!</a>
      </div>
    </header>
  );
};

export default Header;