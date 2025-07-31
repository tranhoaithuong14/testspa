import { Link } from 'react-router-dom';
import './NotFound.less';

const NotFound = () => {
  return (
    <div className="not-found">
      <div className="content">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link to="/" className="home-link">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
