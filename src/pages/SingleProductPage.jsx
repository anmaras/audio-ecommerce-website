import React from 'react';
import { Product } from '../components/index';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import FadeLoader from 'react-spinners/FadeLoader';

export default function SingleProductPage() {
  const { id } = useParams();
  const {
    product_loading,
    fetchSingleProduct,
    products_loading,
    category_loading,
  } = useProductsContext();

  useEffect(() => {
    if (!products_loading) {
      fetchSingleProduct(id);
    }
  }, [id]);

  return (
    <main>
      <Product />
    </main>
  );
}
