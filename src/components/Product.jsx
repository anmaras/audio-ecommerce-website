import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { Pictures, Amount, Spinner } from '../components/index';
import style from '../styles/components/Product.module.scss';
import { formatPrice, splitText } from '../utils/helpers';
import { useCartContext } from '../context/cart_context';
import { motion } from 'framer-motion';
import {
  categoryImgVariant,
  categoryText,
  featuresTextVariant,
  inTheBoxVariant,
  featuresVariant,
  imgGalleryVariant,
  altVariant,
} from '../AnimationVariants/variants';

const Product = ({ productId }) => {
  const {
    single_product: product,
    fetchSingleProduct,
    products,
  } = useProductsContext();
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    fetchSingleProduct(productId);
  }, [products]);

  const increase = () => {
    setAmount((prev) => (prev === amount ? prev + 1 : amount));
  };

  const decrease = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <section className={style.product}>
        <motion.div
          variants={categoryImgVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Pictures
            desktop={product?.image?.desktop}
            tablet={product?.image?.tablet}
            mobile={product?.image?.mobile}
            alt={`${product?.name} image`}
          />
        </motion.div>
        <motion.div
          className={style['product__textWrapper']}
          variants={categoryText}
          initial="initial"
          animate="animate"
        >
          <p className="overline">new product</p>
          <h2 className={style['product__title']}>{product?.name}</h2>
          <p className={style['product__description']}>
            {product?.description}
          </p>
          <p className={style['product__price']}>
            {formatPrice(product?.price)}
          </p>
          <div className={style['product__wrapper-btn']}>
            <Amount increase={increase} decrease={decrease} amount={amount} />
            <button
              type="button"
              className="button-1"
              onClick={() => addToCart(product, amount, product?.id)}
            >
              add to cart
            </button>
          </div>
        </motion.div>
      </section>

      {/* features */}

      <motion.section
        className={style.features}
        variants={featuresVariant}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className={style['features__textWrapper']}
          variants={featuresTextVariant}
        >
          <h3 className={style['features__title']}>features</h3>
          <div className={style['features__description']}>
            {splitText(product?.features)}
          </div>
        </motion.div>
        <motion.div
          className={style['features__insidesWrapper']}
          variants={inTheBoxVariant}
        >
          <h3 className={style['features__title']}>in the box</h3>
          <ul className={style['features__list']}>
            {product?.includes?.map((item, index) => {
              return (
                <li className={style['features__item']} key={index}>
                  <p
                    className={style['features__quantity']}
                  >{`${item.quantity}x`}</p>
                  <p className={style['features__name']}>{item.item}</p>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.section>

      {/* gallery */}

      <section className={style.gallery}>
        <motion.div
          variants={imgGalleryVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Pictures
            desktop={product?.gallery?.first?.desktop}
            tablet={product?.gallery?.first?.tablet}
            mobile={product?.gallery?.first?.mobile}
          />
        </motion.div>
        <motion.div
          variants={imgGalleryVariant}
          initial="initial"
          whileInView="whileInView2"
          viewport={{ once: true }}
        >
          <Pictures
            desktop={product?.gallery?.second?.desktop}
            tablet={product?.gallery?.second?.tablet}
            mobile={product?.gallery?.second?.mobile}
          />
        </motion.div>
        <motion.div
          variants={imgGalleryVariant}
          initial="initial"
          whileInView="whileInView3"
          viewport={{ once: true }}
        >
          <Pictures
            desktop={product?.gallery?.third?.desktop}
            tablet={product?.gallery?.third?.tablet}
            mobile={product?.gallery?.third?.mobile}
          />
        </motion.div>
      </section>

      {/* alternatives */}

      <motion.section
        className={style.alternatives}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className={style['alternatives__title']}>you may also like</h2>
        <ul className={style['alternatives__list']}>
          {product?.others?.map((other, index) => {
            const { desktop, tablet, mobile } = other?.image;
            const { name, slug, category } = other;
            return (
              <motion.li
                className={style['alternatives__item']}
                key={index}
                variants={altVariant}
                initial="initial"
                whileInView="whileInView"
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Pictures desktop={desktop} tablet={tablet} mobile={mobile} />
                <h5>{name}</h5>
                <Link to={`/products/${category}/${slug}`} className="button-1">
                  see product
                </Link>
              </motion.li>
            );
          })}
        </ul>
      </motion.section>
    </>
  );
};

export default Product;
