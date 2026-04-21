import { Routes, Route } from 'react-router-dom';
import Orders from '../pages/Orders';
import OrderDetail from '../pages/OrderDetail';
import Filter from '../pages/Filter';
import Stats from '../pages/Stats';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/orders" element={<Orders />} />
      <Route path="/orders/:id" element={<OrderDetail />} />
      <Route path="/filter" element={<Filter />} />
      <Route path="/stats" element={<Stats />} />
      <Route path="/" element={<Orders />} />
    </Routes>
  );
};

export default AppRouter;