import React from 'react';

const Places = () => {
  const places = [
    {
      img: "/Vancouver.avif",
      location: "Vancouver, Canada"
    },
    {
      img: "paris.jpg",
      location: "Paris, France"
    },
    {
      img: "monaco.jpg",
      location: "Monaco, Monaco"
    },
    {
      img: "bern.jpg",
      location: "Bern, Switzerland"
    },
    {
      img: "seoul.jpg",
      location: "Seoul, South Korea"
    },
    {
      img: "tokyo.jpg",
      location: "Tokyo, Japan"
    }
  ];

  return (
    <section className="places">
      <div className="places-text">
        <small>FEATURED TOURS PACKAGES</small>
        <h2>Favourite Places</h2>
      </div>
      <div className="cards">
        {places.map((place, index) => (
          <div className="card" key={index}>
            <div className="zoom-img">
              <div className="img-card">
                <img src={place.img} alt={place.location} />
              </div>
            </div>
            <div className="text">
              <span className="rating">⭐⭐⭐⭐⭐</span>
              <h2>The Dark Forest Adventure</h2>
              <p className="cost">$1870 / Per Person</p>
              <div className="card-box">
                <p className="time">🕓 3 Days</p>
                <p className="location">✈ {place.location}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Places;