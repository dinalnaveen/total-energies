'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: number;
    title: string;
    rating: number;
    reviews: number;
    price: number;
    salePrice: number;
    discount: number;
    img: string;
    category: string;
    description: string;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="product-card">
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

      <style jsx>{`
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
        
        @media (max-width: 992px) {
          .product-card {
            height: 380px;
          }
        }
        
        @media (max-width: 576px) {
          .product-card {
            height: 360px;
          }
        }
      `}</style>
    </div>
  );
};

export default ProductCard;