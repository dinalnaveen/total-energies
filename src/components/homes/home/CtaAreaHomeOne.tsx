"use client";

import Link from 'next/link';
import React, { useState, useEffect } from 'react';

const cta_content = {
  title: "How We Create Solar Energy",
  sm_des: "Building & Maintaining The Energy",
}
const { title, sm_des } = cta_content

const CtaAreaHomeOne = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };
    
    // Initial check
    checkScreenSize();
    
    // Add event listener
    window.addEventListener('resize', checkScreenSize);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  return (
    <>
      <div className="contact-us-section">
        <div className="container">
          <div className="row contact-us align-items-center">
            <div className="col-lg-2"></div>
            <div className="col-lg-7 col-md-6" style={{ paddingLeft: isLargeScreen ? '40px' : '0' }}>
              <div className="section-title wow animate__fadeInLeft" >
                <div className="section-main-title contact-us" >
                  <h2>{title}</h2>
                </div>
              </div>
              <div className="contact-us-discription wow animate__fadeInUp" style={{ paddingLeft: isLargeScreen ? '4px' : '0' }}>
                <p>{sm_des}</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div className="solar-btn contact-us wow animate__fadeInRight">
                <Link href="/contact">Contact Now <i className="bi bi-arrow-right"></i></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CtaAreaHomeOne;