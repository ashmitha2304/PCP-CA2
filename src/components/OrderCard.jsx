import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const OrderCard = ({ order }) => {
  const { dispatch } = useAppContext();

  const handleMarkDelivered = () => {
    dispatch({ type: 'MARK_DELIVERED', payload: order.orderId });
  };

  return (
    <div data-testid="order-item">
      <p>Order ID: {order.orderId}</p>
      <p>Customer: {order.customerName || 'Unknown'}</p>
      <p>Restaurant: {order.restaurant}</p>
      <p>Total: ₹{order.totalAmount}</p>
      <p>Status: {order.status}</p>
      <p>Delivery Time: {order.deliveryTime}</p>
      {order.rating !== undefined && order.rating !== null && (
        <p>Rating: {order.rating}</p>
      )}
      {order.status && order.status.toLowerCase() !== 'delivered' && (
        <button onClick={handleMarkDelivered}>Mark as Delivered</button>
      )}
      <Link to={`/orders/${order.orderId}`}>View Details</Link>
    </div>
  );
};

export default OrderCard;