import React from 'react';
import '../myStyle.css';

const LimitedSeatsNotification = () => {
  return (
    <div className="animate-opacity text-center p-4">
      <div className="inner-div">
        <a href="#">
          <span className="text-blue-600 text-3xl font-semibold">Limited Seats Available, Act Now!</span>
        </a>
      </div>
    </div>
  );
};

export default LimitedSeatsNotification;
