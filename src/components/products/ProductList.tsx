'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AppointmentForm from '../forms/AppointmentForm';
import Accordion from '../common/Accordion';
import ProductCard from '../homes/home/ProductCard';

// Full product data
const all_products_data = [
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
  },
  {
    id: 5,
    title: 'Grid-Tie Solar Kit',
    rating: 4.8,
    reviews: 85,
    price: 349.99,
    salePrice: 299.99,
    discount: 14,
    img: '/assets/images/products/hot-water-system.jpg',
    category: 'Residential',
    description: 'Complete grid-tie solar system with microinverters for easy installation',
  },
  {
    id: 6,
    title: 'Solar Charge Controller',
    rating: 4.6,
    reviews: 64,
    price: 129.99,
    salePrice: 99.99,
    discount: 23,
    img: '/assets/images/products/power-station.png',
    category: 'Components',
    description: 'MPPT charge controller for maximum efficiency in off-grid solar systems',
  },
  {
    id: 7,
    title: 'Solar Battery Pack',
    rating: 4.7,
    reviews: 56,
    price: 899.99,
    salePrice: 799.99,
    discount: 11,
    img: '/assets/images/products/Solar_Inverter.png',
    category: 'Storage',
    description: 'Lithium battery system for solar energy storage with 10-year warranty',
  },
  {
    id: 8,
    title: 'Solar Pool Heater',
    rating: 4.8,
    reviews: 102,
    price: 399.99,
    salePrice: 349.99,
    discount: 13,
    img: '/assets/images/products/Energy-Monitor.jpg',
    category: 'Water Heating',
    description: 'Solar pool heating system to extend your swimming season economically',
  }
];

// Product categories for filtering
const categories = [
  'All',
  'Residential',
  'Components',
  'Storage',
  'Water Heating'
];

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState(all_products_data);
  
  // Filter products when category changes
  const filterItems = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      setVisibleProducts(all_products_data);
    } else {
      setVisibleProducts(all_products_data.filter(product => product.category === category));
    }
  };

  return (
    <>
      <div className="product-list-section">
        <div className="container">
          {/* Category filter tabs */}
          <div className="row">
            <div className="col-lg-12">
              <div className="protfolio-nav text-center">
                <div className="protfolio-menu">
                  <ul className="menu-filtering">
                    {categories.map((category, i) => (
                      <React.Fragment key={i}>
                        <li
                          onClick={() => filterItems(category)}
                          className={`${category === activeCategory ? "active" : ""} current_menu_item`}
                        >
                          {category}
                        </li>{' '}
                      </React.Fragment>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Product grid */}
          <div className="row">
            <div className="products-grid">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
          
          {visibleProducts.length === 0 && (
            <div className="no-products-message">
              <p>No products found in this category. Please try another category.</p>
            </div>
          )}
        </div>
      </div>
      
      <style jsx>{`
        /* Product section styles */
        .product-list-section {
          padding: 60px 0;
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
        
        /* Category filtering styles */
        .protfolio-nav {
          margin-bottom: 50px;
        }
        
        .protfolio-menu {
          display: flex;
          justify-content: center;
        }
        
        .menu-filtering {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 10px;
          padding: 0;
          margin: 0;
        }
        
        .menu-filtering li {
          background-color: #1c1632;
          color: #ffffff;
          padding: 12px 30px;
          border-radius: 4px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .menu-filtering li:hover {
          background-color: #1c1632;
        }
        
        .menu-filtering li.active {
          background-color: rgb(230, 58, 39);
          color: white;
        }
        
        /* Product grid styles */
        .products-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 30px;
          width: 100%;
        }
        
        .no-products-message {
          text-align: center;
          padding: 40px 0;
          font-size: 16px;
          color: #666;
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
        
        @media (max-width: 768px) {
          .menu-filtering {
            flex-direction: row;
            flex-wrap: wrap;
          }
          
          .menu-filtering li {
            padding: 10px 20px;
            font-size: 14px;
            margin: 5px;
          }
        }
        
        @media (max-width: 576px) {
          .products-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
};

export default ProductList;