import { useAppContext } from '../context/AppContext';
import OrderCard from '../components/OrderCard';

export const isValidOrder = (order) => {
  if (!order.items || !Array.isArray(order.items) || order.items.length === 0) return false;
  const hasValidItems = order.items.some(item => item.quantity > 0);
  if (!hasValidItems) return false;
  if (!order.totalAmount || isNaN(order.totalAmount) || order.totalAmount <= 0) return false;
  if (!order.status) return false;
  return true;
};

const Orders = () => {
  const { data, loading, error } = useAppContext();

  if (loading) return <p>Loading orders...</p>;
  if (error) return <p>Error: {error}</p>;

  const validOrders = data.filter(isValidOrder);
  const pendingOrders = validOrders.filter(
    (o) => o.status.toLowerCase() !== 'delivered'
  );

  return (
    <main>
      <h1>All Orders</h1>
      <p>Total Valid Orders: {validOrders.length}</p>
      <p>Pending Orders: {pendingOrders.length}</p>
      {pendingOrders.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </main>
  );
};

export default Orders;