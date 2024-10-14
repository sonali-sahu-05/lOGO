// src/Components/ErrorPage.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link to navigate to the home page

const ErrorPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" style={{ color: 'blue', textDecoration: 'underline' }}>
        Go back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
