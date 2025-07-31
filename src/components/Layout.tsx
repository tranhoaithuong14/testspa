import { Outlet } from 'react-router-dom';
import Header from './Header';
import './Layout.less';

const Layout = () => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <div className="container">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
