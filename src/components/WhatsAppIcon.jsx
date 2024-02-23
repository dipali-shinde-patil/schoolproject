import React from 'react';
import '../myStyle.css';
 

const WhatsAppIcon = () => {
  return (
    <div className="animate-opacity">
      <div className="ml-2 inner-div fixed bottom-10 left-0 z-10">
        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
          <i className="text-green-600 text-5xl fa-brands fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default WhatsAppIcon;
