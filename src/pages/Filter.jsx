import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import { isValidOrder } from './Orders';
import OrderCard from '../components/OrderCard';

const Filter = () => {
  const { data } = useAppContext();
  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  const validOrders = data.filter(isValidOrder);

  const handleChange = (e) => {
    setInput(e.target.value);
    setError('');
  };

  const handleFilter = () => {
    if (!input.trim()) {
      setError('Please enter a restaurant name');
      return;
    }
  };

  const filtered = input.trim()
    ? validOrders.filter(o =>
        o.restaurant && o.restaurant.toLowerCase().includes(input.toLowerCase())
      )
    : [];

  return (
    <main>
      <h1>Filter Orders</h1>
      <input
        data-testid="filter-input"
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Search by restaurant name"
      />
      <button onClick={handleFilter}>Search</button>
      {error && <p>{error}</p>}

      {input.trim() && filtered.length === 0 && !error && (
        <p>No results found</p>
      )}

      {filtered.map((order) => (
        <OrderCard key={order.orderId} order={order} />
      ))}
    </main>
  );
};

export default Filter;