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
    title: 'GoodWe DNS Series Inverter',
    rating: 4.6,
    reviews: 53,
    price: 108500,
    salePrice: 101990,
    discount: 6,
    img: '/assets/images/products/GoodWeDNS.jpg',
    category: 'Inverter',
    description: 'Compact residential inverter with wide MPPT range and lightweight design.',
  },
  {
    id: 2,
    title: 'GoodWe SDT Series Inverter',
    rating: 4.7,
    reviews: 56,
    price: 117000,
    salePrice: 108810,
    discount: 7,
    img: '/assets/images/products/SDT.jpg',
    category: 'Inverter',
    description: 'Three-phase inverter for residential & commercial use, with AFCI and high efficiency.',
  },
  {
    id: 3,
    title: 'GoodWe MT Series Inverter',
    rating: 4.8,
    reviews: 59,
    price: 125500,
    salePrice: 115460,
    discount: 8,
    img: '/assets/images/products/MT.jpg',
    category: 'Inverter',
    description: 'Inverter for medium and large rooftops with power boost and monitoring capabilities.',
  },
  {
    id: 4,
    title: 'GoodWe HT Series Inverter',
    rating: 4.9,
    reviews: 62,
    price: 134000,
    salePrice: 121940,
    discount: 9,
    img: '/assets/images/products/HT.jpg',
    category: 'Inverter',
    description: 'Industrial-scale inverter with Type II SPD, IP66 protection, and high performance.',
  },
  {
    id: 5,
    title: 'Panasonic Solar Inverter',
    rating: 4.5,
    reviews: 65,
    price: 142500,
    salePrice: 135375,
    discount: 5,
    img: '/assets/images/products/Panasonic.jpg',
    category: 'Inverter',
    description: 'On-grid inverter with 99.9% MPPT efficiency and seamless grid integration.',
  },
  {
    id: 6,
    title: 'Huawei SUN2000 Inverter',
    rating: 4.6,
    reviews: 68,
    price: 151000,
    salePrice: 143440,
    discount: 5,
    img: '/assets/images/products/Huawei.jpg',
    category: 'Inverter',
    description: 'Smart hybrid inverter with battery support and intelligent energy management.',
  },
  {
    id: 7,
    title: 'Panasonic Anchor PV Panel',
    rating: 4.7,
    reviews: 71,
    price: 159500,
    salePrice: 151025,
    discount: 5,
    img: '/assets/images/products/panasonic.png',
    category: 'PV Panels',
    description: 'Crystalline silicon modules with MBB and half-cell tech, ensuring high efficiency.',
  },
  {
    id: 8,
    title: 'Jinko Tiger Neo Panel',
    rating: 4.8,
    reviews: 74,
    price: 168000,
    salePrice: 155280,
    discount: 8,
    img: '/assets/images/products/JINKO.jpg',
    category: 'PV Panels',
    description: 'N-type TOPCon technology with bifacial capability and low-light performance.',
  },
  {
    id: 9,
    title: 'Canadian HiKu Series Panel',
    rating: 4.9,
    reviews: 77,
    price: 176500,
    salePrice: 160135,
    discount: 9,
    img: '/assets/images/products/product-9.jpg',
    category: 'PV Panels',
    description: 'High-efficiency monocrystalline modules with PERC and bifacial options.',
  },
  {
    id: 10,
    title: 'Panasonic Street Light',
    rating: 4.5,
    reviews: 80,
    price: 185000,
    salePrice: 175750,
    discount: 5,
    img: '/assets/images/products/product-10.jpg',
    category: 'Street Lights',
    description: 'Efficient solar-powered street lighting system with long-lasting performance.',
  },
  {
    id: 11,
    title: 'KBE DC Solar Cable',
    rating: 4.6,
    reviews: 83,
    price: 193500,
    salePrice: 179055,
    discount: 7,
    img: '/assets/images/products/KBE.jpg',
    category: 'Cables',
    description: 'Triple-certified durable solar cable with high mechanical strength and flexibility.',
  },
  {
    id: 12,
    title: 'Kelani AC Cable',
    rating: 4.7,
    reviews: 86,
    price: 202000,
    salePrice: 181820,
    discount: 10,
    img: '/assets/images/products/product-12.jpg',
    category: 'Cables',
    description: 'Soft-annealed copper cables for urban and industrial AC applications.',
  },
  {
    id: 13,
    title: 'BENY Solar Protection Devices',
    rating: 4.8,
    reviews: 89,
    price: 210500,
    salePrice: 189450,
    discount: 10,
    img: '/assets/images/products/BENY.jpg',
    category: 'Electrical Accessories',
    description: 'DC/AC MCBs, SPDs, and isolators with international certifications for solar systems.',
  },
  {
    id: 14,
    title: 'Schneider Electric Components',
    rating: 4.9,
    reviews: 92,
    price: 219000,
    salePrice: 197290,
    discount: 10,
    img: '/assets/images/products/Schneider.jpg',
    category: 'Electrical Accessories',
    description: 'Advanced MCBs, SPDs, and isolators for residential to industrial solar setups.',
  },
  {
    id: 15,
    title: 'Swisstek Solar Rail Kit',
    rating: 4.9,
    reviews: 95,
    price: 227500,
    salePrice: 206025,
    discount: 9,
    img: '/assets/images/products/product-15.jpg',
    category: 'Aluminum Accessories',
    description: 'High-grade aluminum mounting systems for rooftops and ground solar installations.',
  }
];


// Product categories for filtering
const categories = [
  'All',
  'Inverter',
  'PV Panels',
  'Street Lights',
  'Electrical Accessories',
  'Cables',
  'Aluminum Accessories'
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