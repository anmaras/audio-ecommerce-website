import React from 'react';
import { Product } from '../components/index';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import FadeLoader from 'react-spinners/FadeLoader';

export default function SingleProductPage() {
  const { id } = useParams();
  const {
    products,
    product_loading,
    fetchSingleProduct,
    products_loading,
    category_loading,
    single_product,
  } = useProductsContext();

  useEffect(() => {
    fetchSingleProduct(id);
  }, [id]);

  // if (!products.length) {
  //   <FadeLoader />;
  // }

  return (
    <main>
      <Product />
    </main>
  );
}
