"use client";

import React from 'react';
import Image from 'next/image';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';

interface BrandLogo {
  id: number;
  name: string;
  logo: string;
}

const BrandLogosSlider: React.FC = () => {
  const brandLogos: BrandLogo[] = [
    { id: 1, name: 'SunPower', logo: '/assets/images/brands/logo1.png' },
    { id: 2, name: 'Tesla', logo: '/assets/images/brands/logo2.png' },
    { id: 3, name: 'LG Solar', logo: '/assets/images/brands/logo3.png' },
    { id: 4, name: 'Panasonic', logo: '/assets/images/brands/logo4.png' },
    { id: 5, name: 'Canadian Solar', logo: '/assets/images/brands/logo5.png' },
    { id: 6, name: 'Enphase', logo: '/assets/images/brands/logo6.png' },
    { id: 7, name: 'SolarEdge', logo: '/assets/images/brands/logo7.png' },
    { id: 8, name: 'JinkoSolar', logo: '/assets/images/brands/logo8.png' },
  ];

  return (
    <section style={styles.brandLogosSection}>
      <div className="container">
        <div className="row mb-4">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <div className="section-sub-title wow slideInLeft">
                <h4>Our Trusted Partners</h4>
              </div>
              <div className="section-main-title wow slideInLeft">
                <h2>Leading Solar Brands</h2>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-12">
            <div className="slider-container">
              <div className="slider">
                {/* First set of logos */}
                {brandLogos.map((brand) => (
                  <div key={brand.id} className="slide">
                    <div style={styles.brandLogoContainer} className="brand-logo-container">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        width={150}
                        height={80}
                        style={styles.brandLogo}
                        className="brand-logo-image"
                      />
                    </div>
                  </div>
                ))}
                
                {/* Duplicate first set to create seamless loop */}
                {brandLogos.map((brand) => (
                  <div key={`dup-${brand.id}`} className="slide">
                    <div style={styles.brandLogoContainer} className="brand-logo-container">
                      <Image
                        src={brand.logo}
                        alt={`${brand.name} Logo`}
                        width={150}
                        height={80}
                        style={styles.brandLogo}
                        className="brand-logo-image"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Self-contained CSS for slider */}
      <style jsx>{`
        .slider-container {
          overflow: hidden;
          padding: 10px 0;
          width: 100%;
          position: relative;
          height: 140px;
        }
        
        .slider {
          display: flex;
          position: absolute;
          left: 0;
          animation: slide 25s linear infinite;
          width: max-content;
        }
        
        @keyframes slide {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        
        .slide {
          margin-right: 20px;
          margin-left: 20px;
          flex-shrink: 0;
        }
        
        .brand-logo-container:hover {
          transform: translateY(-5px);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
        }
        
        /* Title styles */
        .section-title {
          margin-bottom: 40px;
        }
        
        .section-sub-title h4 {
          color: #ff5a1f;
          font-size: 18px;
          font-weight: 600;
          margin-bottom: 15px;
          position: relative;
          text-transform: uppercase;
        }
        
        .section-main-title h2 {
          font-size: 36px;
          font-weight: 700;
          margin-bottom: 0;
          color: #212529;
        }
        
        @media (max-width: 768px) {
          .section-main-title h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

// Inline styles object
const styles = {
  brandLogosSection: {
    padding: '3rem 0 4rem',
    backgroundColor: '#f8f9fa',
    margin: '0',
    position: 'relative' as 'relative',
    overflow: 'hidden' as 'hidden'
  },
  brandLogoContainer: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    padding: '1.5rem',
    height: '120px',
    width: '180px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
  },
  brandLogo: {
    maxWidth: '100%',
    maxHeight: '80px',
    objectFit: 'contain' as 'contain',
    transition: 'filter 0.3s ease, opacity 0.3s ease'
  }
};

export default BrandLogosSlider;