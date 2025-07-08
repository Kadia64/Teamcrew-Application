import React from 'react';
import { SHOW_NOTIFICATION } from '../../config/notifications';

const NotificationBar = () => {
  if (!SHOW_NOTIFICATION) {
    return null;
  }

  return (
    <div className="bg-red-600 text-white py-3 px-4 text-center">
      <div className="flex flex-col sm:flex-row items-center justify-center sm:space-x-4 space-y-2 sm:space-y-0">
        <span className="text-sm md:text-base font-medium">
          Fall Tryouts/Evaluations Now Available!
        </span>
        <button 
          className="bg-black text-white px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200"
          onClick={() => {
            // Add your registration logic here
            console.log('Register clicked');
          }}
        >
          Register Now
        </button>
      </div>
    </div>
  );
};

export default NotificationBar;