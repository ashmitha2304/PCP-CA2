import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <nav>
      <Link className={isActive('/orders')} to="/orders">Orders</Link>
      <Link className={isActive('/filter')} to="/filter">Filter</Link>
      <Link className={isActive('/stats')} to="/stats">Stats</Link>
    </nav>
  );
};

export default Navbar;