import React, { useState } from 'react';

const Tours = () => {
  const allTours = [
    {
      id: 1,
      title: 'European Adventure',
      image: '/europe.avif',
      duration: '10 Days',
      price: '$2500',
      type: 'Adventure'
    },
    {
      id: 2,
      title: 'Asian Expedition',
      image: '/asian.jpeg',
      duration: '14 Days',
      price: '$2800',
      type: 'Cultural'
    },
    {
      id: 3,
      title: 'Desert Safari',
      image: '/yellow.jpg',
      duration: '7 Days',
      price: '$1800',
      type: 'Adventure'
    }
  ];

  const [filter, setFilter] = useState('All');

  const filteredTours = filter === 'All' ? allTours : allTours.filter(tour => tour.type === filter);

  return (
    <div className="tours-page">
      <div className="tour-filters">
        {['All', 'Adventure', 'Cultural'].map(type => (
          <button
            key={type}
            className={`filter-btn ${filter === type ? 'active' : ''}`}
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="tour-grid">
        {filteredTours.map(tour => (
          <div className="tour-card" key={tour.id}>
            <div 
              className="tour-image" 
              style={{ backgroundImage: `url(${tour.image})` }}
            >
              <span className="tour-badge">{tour.type}</span>
            </div>
            <div className="tour-content">
              <h3>{tour.title}</h3>
              <div className="tour-duration">
                <span>📅 {tour.duration}</span>
                <span>💰 {tour.price}</span>
              </div>
              <button className="book-btn">View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tours;
