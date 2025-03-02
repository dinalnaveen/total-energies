
import React from 'react';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Breadcrumb from '../common/breadcrumb/breadcrumb';
import FooterOne from '@/layouts/footers/FooterOne';
import ProductList from './ProductList';

const Products = () => {
  return (
    <>
      <HeaderOne />
      <main>
        <Breadcrumb top_title='Products' title='Products' /> 
        <ProductList/>
      </main>
      <FooterOne />
    </>
  );
};

export default Products;