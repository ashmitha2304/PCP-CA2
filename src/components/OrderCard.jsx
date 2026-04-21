import { Link } from 'react-router-dom';

const OrderCard = ({ order }) => {
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
      <Link to={`/orders/${order.orderId}`}>View Details</Link>
    </div>
  );
};

export default OrderCard;