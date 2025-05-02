import React from 'react';

const Packages = () => {
  const packages = [
    { id: 1, name: 'Basic', price: '$999', features: ['3 Destinations', '2 Star Hotel', 'Local Guide'] },
    { id: 2, name: 'Premium', price: '$1999', features: ['5 Destinations', '4 Star Hotel', 'Private Guide'] },
    { id: 3, name: 'Luxury', price: '$2999', features: ['7 Destinations', '5 Star Hotel', 'VIP Services'] }
  ];

  return (
    <div className="page-container">
      <h1>Tour Packages</h1>
      <div className="packages-grid">
        {packages.map(pkg => (
          <div key={pkg.id} className="package-card">
            <h3>{pkg.name} Package</h3>
            <h4>{pkg.price}</h4>
            <ul>
              {pkg.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <button className="select-btn">Select Package</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Packages;