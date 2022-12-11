import React, { useEffect, useState } from 'react';
import {
  MenuList,
  HomePageNewProduct,
  ProductsPreviews,
  About,
  Spinner,
} from '../components';

import { LazyMotion, domAnimation, m } from 'framer-motion';
import { menuListVariant } from '../AnimationVariants/variants';
import { useProductsContext } from '../context/products_context';
import mobileUrl from '/assets/home/mobile/image-header.jpg';
import tabletUrl from '/assets/home/tablet/image-header.jpg';
import desktopUrl from '/assets/home/desktop/image-hero.jpg';
import { setImageSize } from '../utils/helpers';

export default function HomePage() {
  const { products_loading: loading } = useProductsContext();
  const [imageDimensions, setImageDimensions] = useState({});
  const [imageUrl, setImageUrl] = useState([mobileUrl, tabletUrl, desktopUrl]);

  useEffect(() => {
    setImageSize(setImageDimensions, imageUrl);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  return (
    <LazyMotion features={domAnimation}>
      <main className="main homepage">
        <HomePageNewProduct imageDimensions={imageDimensions} />
        <section className="main__homePageWrapper">
          <m.div
          // variants={menuListVariant}
          // initial="initial"
          // whileInView="whileInView"
          // viewport={{ once: true }}
          >
            <MenuList />
          </m.div>
          <ProductsPreviews />
          <About />
        </section>
      </main>
    </LazyMotion>
  );
}
