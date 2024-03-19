import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-white text-center sm:text-left">© 2024 Langlore. All rights reserved.</p>
          <div className="flex justify-center sm:justify-end space-x-6 mt-4 sm:mt-0">
            <a href="#" className="text-gray-300 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="text-gray-300 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
