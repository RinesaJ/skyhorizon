import React from 'react';

const Banner = () => {
  return (
    <section className="banner">
      <div className="banner-text-item">
        <div className="banner-heading">
          <h1>Find your Next tour!</h1>
        </div>
        <form className="form">
          <input type="text" list="mylist" placeholder="Where would you like to go?" />
          <datalist id="mylist">
            <option>London</option>
            <option>Canada</option>
            <option>Monaco</option>
            <option>France</option>
            <option>Japan</option>
            <option>Switzerland</option>
            <option>Seoul</option>
          </datalist>
          <input type="date" className="date" />
          <a href="#book" className="book">book</a>
        </form>
      </div>
    </section>
  );
};

export default Banner;