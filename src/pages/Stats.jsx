import { useEffect } from 'react';
import { useAppContext } from '../context/AppContext';
import { isValidOrder } from './Orders';

const Stats = () => {
  const { data } = useAppContext();

  const validOrders = data.filter(isValidOrder);

  const totalOrders = validOrders.length;
  const deliveredOrders = validOrders.filter(o =>
    o.status && o.status.toLowerCase() === 'delivered'
  ).length;
  const cancelledOrders = validOrders.filter(o =>
    o.status && o.status.toLowerCase() === 'cancelled'
  ).length;

  useEffect(() => {
    window.appState = {
      totalOrders,
      deliveredOrders,
      cancelledOrders,
    };
  }, [data]);

  return (
    <main>
      <h1>Stats</h1>
      <p>Total Orders: <strong data-testid="total-orders">{totalOrders}</strong></p>
      <p>Delivered Orders: <strong data-testid="delivered-orders">{deliveredOrders}</strong></p>
      <p>Cancelled Orders: <strong data-testid="cancelled-orders">{cancelledOrders}</strong></p>
    </main>
  );
};

export default Stats;