import React from 'react';
import '../myStyle.css';

const LimitedOfferNotification = () => {
  return (
    <div className="animate-opacity text-center p-4">
      <div className="inner-div">
        <a href="#">
          <span className="text-red-600 text-3xl font-semibold">Limited Time Offer, Don't Miss Out!</span>
        </a>
      </div>
    </div>
  );
};

export default LimitedOfferNotification;
