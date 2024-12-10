import React from 'react';
import Carousel from '../components/Carousel/Carousel';
import PageTransition from '../components/Animations/PageTransition';
import './UserPage.css';

function UserPage() {
  return (
    <PageTransition>
      <div className="user-page">
        <h1>MURUGAN STORES</h1>
        <Carousel />
      </div>
    </PageTransition>
  );
}

export default UserPage;


