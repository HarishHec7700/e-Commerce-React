import React from 'react';
import Navbar from './Comp/Navbar'; 
import OneBhk from './Comp/Onebhk';

function Home() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <div className="home-sec">
        <OneBhk/>
        </div>
      </div>
    </>
  )
}

export default Home