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
    title: "GoodWe DNS Series",
    price: 445.82,
    salePrice: 371.52,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Inverter",
    description: "Compact residential inverter with wide MPPT range, low startup voltage, and fanless design.",
    filter: ["All", "Inverter"]
  },
  {
    id: 2,
    title: "GoodWe SDT Series",
    price: 817.34,
    salePrice: 681.11,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Inverter",
    description: "Three-phase inverter with AFCI, 98.3% efficiency, and enhanced overloading capabilities.",
    filter: ["All", "Inverter"]
  },
  {
    id: 3,
    title: "GoodWe MT Series",
    price: 1671.83,
    salePrice: 1393.19,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Inverter",
    description: "Commercial inverter with up to 150% AC output overloading and 99% efficiency.",
    filter: ["All", "Inverter"]
  },
  {
    id: 4,
    title: "GoodWe HT Series",
    price: 3157.89,
    salePrice: 2631.58,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Inverter",
    description: "High-capacity inverter for industrial use with max efficiency, SPD, and IP66 rating.",
    filter: ["All", "Inverter"]
  },
  {
    id: 5,
    title: "Panasonic On-Grid Inverters",
    price: 668.73,
    salePrice: 557.28,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Inverter",
    description: "Solar inverters with 99.9% MPPT efficiency, compact design, and extended warranty.",
    filter: ["All", "Inverter"]
  },
  {
    id: 6,
    title: "Huawei SUN2000 Inverter",
    price: 928.79,
    salePrice: 773.99,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Inverter",
    description: "Smart inverter with high efficiency, optimizer compatibility, and energy storage support.",
    filter: ["All", "Inverter"]
  },
  {
    id: 7,
    title: "Jinko Tiger Neo Panel",
    price: 241.49,
    salePrice: 201.24,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "PV Panels",
    description: "High-efficiency N-type bifacial panel with low-light performance and TOPCon tech.",
    filter: ["All", "PV Panels"]
  },
  {
    id: 8,
    title: "Canadian HiKu Series Panel",
    price: 222.91,
    salePrice: 185.76,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "PV Panels",
    description: "High-power mono PERC panels with strong durability and 25-year warranty.",
    filter: ["All", "PV Panels"]
  },
  {
    id: 9,
    title: "KBE Solar Cable 6mm",
    price: 1.30,
    salePrice: 1.08,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Electrical and Aluminum Accessories",
    description: "Durable German-made DC cable, triple-certified, direct burial, UV resistant.",
    filter: ["All", "Electrical and Aluminum Accessories"]
  },
  {
    id: 10,
    title: "Kelani AC Cable",
    price: 1.19,
    salePrice: 0.99,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Electrical and Aluminum Accessories",
    description: "Stranded copper AC wire with PVC insulation for reliable urban and industrial use.",
    filter: ["All", "Electrical and Aluminum Accessories"]
  },
  {
    id: 11,
    title: "Swisstek Solar Railing",
    price: 5.57,
    salePrice: 4.64,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Electrical and Aluminum Accessories",
    description: "Rust-free aluminum railings for rooftop and ground solar mounting systems.",
    filter: ["All", "Electrical and Aluminum Accessories"]
  },
  {
    id: 12,
    title: "BENY DC Protection Components",
    price: 15.60,
    salePrice: 13.00,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Electrical and Aluminum Accessories",
    description: "Reliable DC MCBs, SPDs, and isolators with advanced safety features.",
    filter: ["All", "Electrical and Aluminum Accessories"]
  },
  {
    id: 13,
    title: "Schneider Electric Protection Devices",
    price: 17.83,
    salePrice: 14.86,
    discount: 17,
    img: "/assets/images/products/Energy-Monitor.jpg",
    category: "Electrical and Aluminum Accessories",
    description: "MCBs, SPDs, and isolators for AC/DC circuits, including Acti9 series.",
    filter: ["All", "Electrical and Aluminum Accessories"]
  }
];

// Product categories for filtering
const categories = [
  'All',
  'Inverter',
  'PV Panels',
  'Street Lights',
  'Electrical and Aluminum Accessories'
];

const ProductList = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [visibleProducts, setVisibleProducts] = useState(all_products_data);
  
  // Filter products when category changes
  const filterItems = (category: React.SetStateAction<string>) => {
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