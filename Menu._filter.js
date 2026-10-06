import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const MenuItemDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`/api/menu-items/${id}`);
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error('Error fetching menu item details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchItemDetails();
  }, [id]);


  const handleAddToCart = () => {
 
    console.log(`Added ${quantity} x ${item.name} to cart.`);
    setMessage(`${item.name} added to cart!`);
    setTimeout(() => setMessage(''), 3000);
  };

  if (loading) return <div className="loader">Loading item details...</div>;
  if (!item) return <div className="error">Menu item not found.</div>;

  return (
    <div className="menu-item-detail-container" style={{ padding: '20px', maxWidth: '600px', margin: '0 auto' }}>
      <h1>{item.name}</h1>
      <p className="category"><strong>Category:</strong> {item.category}</p>
      <p className="description">{item.description}</p>
      <p className="price"><strong>Price:</strong> ${item.price?.toFixed(2)}</p>
      
      <p className="status">
        <strong>Status:</strong>{' '}
        <span style={{ color: item.isAvailable ? 'green' : 'red' }}>
          {item.isAvailable ? 'In Stock' : 'Out of Stock'}
        </span>
      </p>

      {item.isAvailable && (
        <div className="cart-actions" style={{ marginTop: '20px' }}>
          <label htmlFor="quantity">Quantity: </label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
            style={{ width: '60px', marginRight: '10px' }}
          />
          <button onClick={handleAddToCart} style={{ padding: '8px 16px', cursor: 'pointer' }}>
            Add to Cart
          </button>
        </div>
      )}

      {message && <p className="success-msg" style={{ color: 'green', marginTop: '10px' }}>{message}</p>}
    </div>
  );
};

export default MenuItemDetail;
