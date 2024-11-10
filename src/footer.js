// src/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-800 text-white py-4 w-full text-center">
      <p className="text-sm">
        Site made by{' '}
        <a
          href="http://www.gabrielavelasco.de"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-yellow-500"
        >
        www.gabrielavelasco.de
        </a>
        {' | '}
        <a
          href="https://apod.nasa.gov/apod/astropix.html"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-yellow-500"
        >
          NASA Astronomy Picture of the Day (Source)
        </a>
      </p>
    </footer>
  );
};

export default Footer;
