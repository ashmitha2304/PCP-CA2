import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const OrderDetail = () => {
  const { id } = useParams();
  const { data } = useAppContext();

  const order = data.find(o => String(o.orderId) === String(id));

  if (!order) return <p>Order not found</p>;

  return (
    <main>
      <h1>Order Details</h1>
      <p>Order ID: {order.orderId}</p>
      <p>Customer: {order.customerName || 'Unknown'}</p>
      <p>Restaurant: {order.restaurant || 'N/A'}</p>
      <p>Status: {order.status || 'N/A'}</p>
      <p>Total Amount: ₹{order.totalAmount}</p>
      <p>Delivery Time: {order.deliveryTime || 'N/A'}</p>
      {order.rating !== undefined && order.rating !== null && (
        <p>Rating: {order.rating}</p>
      )}
      <h2>Items</h2>
      {order.items && order.items.map((item, index) => (
        <div key={index}>
          <p>Name: {item.name || 'N/A'}</p>
          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>
          <p>Subtotal: ₹{(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
    </main>
  );
};

export default OrderDetail;