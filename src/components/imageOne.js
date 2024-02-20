import {React, useState } from 'react';
import '../style/navbar.css'
import { Parallax } from 'react-parallax';
import Navbar from './Navbar'
import CryptoPrice from './Api'
import swapCloud from '../images/swapcloud-cloud-1.png'


function ImageOne() {

  return (
    <Parallax className ="image" bgImage={swapCloud} strength={800}>
        <Navbar/>
        <div className='content-1'>
            <span className='text'>Welcome to SwapCloud</span> 
        </div>
        <CryptoPrice/>
        <div className='content-2'>
            <h4>Where swapping is easy,fast and reliable</h4>
            <button className='central-btn' >Get started!</button>
        </div>
          
    </Parallax>
);
  
}

export default ImageOne

