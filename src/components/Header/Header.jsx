import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <div className="college-name">
          <NavLink to="/" className="h" data-discover="true">
         Vivekanand college
        </NavLink>
        </div>
        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      
        <nav className={`navbar${menuOpen ? ' open' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
          {/* Apply Now button for mobile drawer */}
          <a href="/admission" className="apply-now-btn mobile">Apply Now</a>
        </nav>
        {/* Apply Now button for desktop */}
        <a href="/admission" className="apply-now-btn desktop">Apply Now</a>
      </div>
    </header>
  );

  
};

export default Header;