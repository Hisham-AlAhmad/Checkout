import { Outlet } from "react-router-dom";
import Navbar from '../components/Navbar';
import Steps from '../components/Steps';
import Address from '../components/Address';

function Layout() {
  return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Steps />
      <div className="content">
        <Outlet />
      </div>

    </div>
  );
}

export default Layout;