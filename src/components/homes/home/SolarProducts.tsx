'use client';

import React from 'react';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';
import ProductCard from './ProductCard';

// Sample product data
const products_data = [
  {
    id: 1,
    title: 'Solar Panels',
    rating: 4.9,
    reviews: 126,
    price: 99.99,
    salePrice: 79.99,
    discount: 20,
    img: '/assets/images/products/hot-water-system.jpg',
    category: 'Residential',
    description: 'High-efficiency solar panels with industry-leading warranty, perfect for residential use',
  },
  {
    id: 2,
    title: 'Portable Power Station',
    rating: 4.8,
    reviews: 94,
    price: 199.99,
    salePrice: 169.99,
    discount: 15,
    img: '/assets/images/products/power-station.png',
    category: 'Storage',
    description: 'Compact power station for home backup or outdoor activities with multiple outputs',
  },
  {
    id: 3,
    title: 'Solar Inverters',
    rating: 4.7,
    reviews: 78,
    price: 159.99,
    salePrice: 129.99,
    discount: 19,
    img: '/assets/images/products/Solar_Inverter.png',
    category: 'Components',
    description: 'High-efficiency solar inverters for optimal energy conversion and grid connection',
  },
  {
    id: 4,
    title: 'Solar Hot Water Systems',
    rating: 4.9,
    reviews: 112,
    price: 249.99,
    salePrice: 199.99,
    discount: 20,
    img: '/assets/images/products/Energy-Monitor.jpg',
    category: 'Water Heating',
    description: 'Energy-efficient solar water heating systems to reduce your utility bills',
  }
];

interface SolarProductsProps {
  className?: string;
}

const SolarProducts: React.FC<SolarProductsProps> = ({ className = '' }) => {
  return (
    <section className={`solar-products-section ${className}`}>
      <div className="container">
        <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="section-sub-title">
                  <h6 className="products-subtitle">Our Products</h6>
                </div>
                <div className="section-main-title">
                  <h2 className="products-title">Solar Solutions For Your Needs</h2>
                </div>
              </div>
            </div>
          </div>
        
        <div className="row">
          <div className="products-grid">
            {products_data.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-12">
            <div className="load-more">
              <button className="load-more-btn" onClick={() => window.location.href = '/products'}>
                View All Products
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        .solar-products-section {
          padding: 60px 0;
          background-color: #f9f9f9;
          width: 100%;
        }
        
        .container {
          width: 100%;
          max-width: 1320px;
          margin: 0 auto;
          padding: 0 15px;
        }
        
        .row {
          display: flex;
          flex-wrap: wrap;
          margin-right: -15px;
          margin-left: -15px;
          width: 100%;
        }
        
        .col-lg-12 {
          position: relative;
          width: 100%;
          padding-right: 15px;
          padding-left: 15px;
        }
        
        .section-title {
          text-align: center;
          margin-bottom: 50px;
          position: relative;
        }
        
        .section-sub-title {
          margin-bottom: 10px;
        }
        
        .products-subtitle {
          color: rgb(230, 58, 39);
          font-size: 16px;
          font-weight: 600;
          text-transform: uppercase;
          position: relative;
          display: inline-block;
        }
        
        .products-subtitle:before,
        .products-subtitle:after {
          content: "";
          position: absolute;
          top: 50%;
          width: 40px;
          height: 2px;
          background-color: rgb(230, 58, 39);
        }
        
        .products-subtitle:before {
          right: 100%;
          margin-right: 15px;
        }
        
        .products-subtitle:after {
          left: 100%;
          margin-left: 15px;
        }
        
        .section-main-title {
          margin: 0;
        }
        
        .products-title {
          font-size: 36px;
          font-weight: 700;
          color: #212529;
          margin: 0;
        }
        
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
          width: 100%;
        }
        
        .load-more {
          text-align: center;
          margin: 15px 0 25px;
        }
        
        .load-more-btn {
          display: inline-block;
          background-color: rgb(230, 58, 39);
          border: none;
          color: white;
          padding: 14px 40px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .load-more-btn:hover {
          background-color: rgb(204, 51, 33);
        }
        
        /* Responsive styles */
        @media (max-width: 1200px) {
          .products-grid {
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
          }
        }
        
        @media (max-width: 992px) {
          .products-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 15px;
          }
        }
        
        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .products-title {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
};

export default SolarProducts;