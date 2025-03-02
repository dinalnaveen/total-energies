'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from 'react-icons/fa';

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
              <div key={product.id} className="product-card">
                <div className="product-image-wrapper">
                  <div className="image-container">
                    <Image 
                      src={product.img} 
                      alt={product.title}
                      fill={true}
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{objectFit: 'contain', objectPosition: 'center'}}
                      className="product-image"
                    />
                  </div>
                  <span className="discount-badge">{product.discount}% OFF</span>
                </div>
                
                <div className="product-body">
                  <span className="product-category">{product.category}</span>
                  <h3 className="product-title">
                    <Link href={`/product-details/${product.id}`}>{product.title}</Link>
                  </h3>
                  
                  <div className="product-rating">
                    <span className="rating-value">★{product.rating}</span>
                    <span className="review-count">({product.reviews} reviews)</span>
                  </div>
                  
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-price">
                    <span className="sale-price">LKR {(product.salePrice * 323).toFixed(2)}</span>
                    <span className="original-price">LKR {(product.price * 323).toFixed(2)}</span>
                  </div>
                  
                  <div className="product-actions">
                    <div className="action-buttons">
                      <Link href={`/product-details/${product.id}`}>
                        <button className="view-details-btn">View Details</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
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
        
        .product-card {
          background-color: #fff;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          display: flex;
          flex-direction: column;
          height: 420px;
          width: 100%;
          margin: 0;
          padding: 0;
        }
        
        .product-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
        }
        
        .product-image-wrapper {
          position: relative;
          height: 200px;
          width: 100%;
          overflow: hidden;
          padding: 0;
          margin: 0;
        }
        
        .image-container {
          position: relative;
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
        }
        
        .product-image {
          transition: transform 0.5s ease;
        }
        
        .product-card:hover .image-container .product-image {
          transform: scale(1.05);
        }
        
        .discount-badge {
          position: absolute;
          top: 10px;
          left: 10px;
          background-color: rgb(230, 58, 39);
          color: white;
          padding: 5px 10px;
          font-size: 12px;
          font-weight: 600;
          border-radius: 4px;
          z-index: 2;
        }
        
        .product-body {
          padding: 10px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          width: 100%;
        }
        
        .product-category {
          display: inline-block;
          background-color: #eef7ff;
          color: #286090;
          font-size: 12px;
          padding: 4px 10px;
          border-radius: 4px;
          margin-bottom: 6px;
          align-self: flex-start;
        }
        
        .product-title {
          font-size: 16px;
          font-weight: 600;
          margin: 0 0 6px 0;
          line-height: 1.3;
          height: 22px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        
        .product-title a {
          color: #333;
          text-decoration: none;
          transition: color 0.3s ease;
        }
        
        .product-title a:hover {
          color: rgb(230, 58, 39);
        }
        
        .product-rating {
          display: flex;
          align-items: center;
          margin-bottom: 6px;
        }
        
        .rating-value {
          color: #ffc107;
          font-weight: 600;
          margin-right: 5px;
        }
        
        .review-count {
          color: #777;
          font-size: 13px;
        }
        
        .product-description {
          font-size: 14px;
          color: #666;
          margin-bottom: 8px;
          line-height: 1.3;
          height: 36px;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        
        .product-price {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .sale-price {
          font-size: 20px;
          font-weight: 700;
          color: rgb(230, 58, 39);
          margin-right: 10px;
        }
        
        .original-price {
          font-size: 14px;
          color: #999;
          text-decoration: line-through;
        }
        
        .product-actions {
          margin-top: auto;
        }
        
        .action-buttons {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        
        .view-details-btn {
          background-color: rgb(230, 58, 39);
          color: white;
          border: none;
          border-radius: 4px;
          padding: 10px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.3s ease;
          width: 100%;
          text-align: center;
        }
        
        .view-details-btn:hover {
          background-color: rgb(204, 51, 33);
        }
        
        .arrow-icon {
          font-style: normal;
          margin-left: 5px;
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
          
          .product-card {
            height: 380px;
          }
        }
        
        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
          
          .products-title {
            font-size: 28px;
          }
          
          .product-card {
            height: 360px;
          }
        }
      `}</style>
    </section>
  );
};

export default SolarProducts;