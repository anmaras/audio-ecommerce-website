import React from 'react';
import { useEffect } from 'react';
import { GoBackButton, FormContainer } from '../components';
import { useCartContext } from '../context/cart_context';
import { useNavigate } from 'react-router-dom';
import { useMenuCartContext } from '../context/menu_cart_context';
import { ScrollToTopOnMount } from '../utils/helpers';

export default function CheckOutPage() {
  const { closeCart } = useMenuCartContext();
  const { cart } = useCartContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (cart.length === 0) {
      setTimeout(() => {
        navigate('/');
        setTimeout(() => {
          closeCart();
        }, 0);
      }, 2000);
    }
  }, [cart.length]);

  return (
    <main className="main checkout">
      <ScrollToTopOnMount />
      <GoBackButton />
      <section className="main__checkoutPageWrapper">
        <FormContainer />
      </section>
    </main>
  );
}
