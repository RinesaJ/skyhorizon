import React from 'react';

const Tours = () => {
  const tours = [
    {
      id: 1,
      title: 'European Adventure',
      image: '/europe.avif',
      duration: '10 Days',
      price: '$2500',
      type: 'Popular'
    },
    {
      id: 2,
      title: 'Asian Expedition',
      image: '/asian.jpeg',
      duration: '14 Days',
      price: '$2800',
      type: 'Cultural'
    }
  ];
  

  return (
    <div className="tours-page">
      <div className="tour-filters">
        <button className="filter-btn active">All</button>
        <button className="filter-btn">Adventure</button>
        <button className="filter-btn">Cultural</button>
      </div>
      <div className="tour-grid">
        {tours.map(tour => (
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