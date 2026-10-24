import React, { useState } from 'react';
import './OrderStatus.css'; 

const STATUSES = ['Pending', 'Preparing', 'Ready', 'Delivered'];

export default function OrderStatus() {
  // Order status management
  const [currentStatus, setCurrentStatus] = useState('Pending');
  const [orderId] = useState('ORD-101');

  const activeStepIndex = STATUSES.indexOf(currentStatus);

  const handleStatusUpdate = (newStatus) => {
    setCurrentStatus(newStatus);
  };

  return (
    <div className="tracker-card">
      {/* Header section */}
      <div className="tracker-header">
        <h2>Order Status Tracking</h2>
        <p>Order ID: <strong>#{orderId}</strong></p>
      </div>

      {/* Display current order status */}
      <div className="stepper-container">
        {STATUSES.map((statusName, index) => {
          const isCompletedOrActive = index <= activeStepIndex;
          return (
            <div key={statusName} className="step-item">
              <div className={`step-circle ${isCompletedOrActive ? 'active' : ''}`}>
                {index + 1}
              </div>
              <span className={`step-label ${isCompletedOrActive ? 'active-text' : ''}`}>
                {statusName}
              </span>
            </div>
          );
        })}
      </div>

      {/* Status banner */}
      <div className="current-status-banner">
        Current Status: <span className="status-highlight">{currentStatus}</span>
      </div>

      {/* Action buttons to update status */}
      <div className="actions-section">
        <h4>Update Status:</h4>
        <div className="button-group">
          {STATUSES.map((statusName) => (
            <button
              key={statusName}
              type="button"
              className={`status-btn ${currentStatus === statusName ? 'btn-active' : ''}`}
              onClick={() => handleStatusUpdate(statusName)}
            >
              {statusName}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}