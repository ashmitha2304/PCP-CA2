import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { isValidOrder } from './Orders';

const Stats = () => {
  const { data } = useAppContext();

  const validOrders = data.filter(isValidOrder);

  const stats = validOrders.reduce(
    (acc, order) => {
      acc.totalOrders += 1;
      const status = order.status.toLowerCase();
      if (status === 'delivered') acc.deliveredOrders += 1;
      if (status === 'cancelled') acc.cancelledOrders += 1;
      return acc;
    },
    { totalOrders: 0, deliveredOrders: 0, cancelledOrders: 0 }
  );

  useEffect(() => {
    window.appState = {
      totalOrders: stats.totalOrders,
      deliveredOrders: stats.deliveredOrders,
      cancelledOrders: stats.cancelledOrders,
    };
  }, [data]);

  return (
    <main>
      <h1>Orders Analytics Dashboard</h1>
      <div data-testid="total-orders">{stats.totalOrders}</div>
      <div data-testid="delivered-orders">{stats.deliveredOrders}</div>
      <div data-testid="cancelled-orders">{stats.cancelledOrders}</div>
      <p>Total Valid Orders: {stats.totalOrders}</p>
      <p>Delivered Orders: {stats.deliveredOrders}</p>
      <p>Cancelled Orders: {stats.cancelledOrders}</p>
    </main>
  );
};

export default Stats;