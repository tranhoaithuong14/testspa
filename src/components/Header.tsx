import { Link } from 'react-router-dom';
import './Header.less';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            React SPA
          </Link>
          <nav className="nav">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/about" className="nav-link">
              About
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
