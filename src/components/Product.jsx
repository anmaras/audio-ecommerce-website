import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Pictures, Amount } from '../components/index';
import style from '../styles/components/Product.module.scss';
import { formatPrice, splitText } from '../utils/helpers';
import { useCartContext } from '../context/cart_context';
import { useMenuCartContext } from '../context/menu_cart_context';
import { getImageUrl } from '../utils/helpers';
import { motion } from 'framer-motion';

const Product = ({ product }) => {
  const { addToCart } = useCartContext();
  const [amount, setAmount] = useState(1);
  const { toggleCart } = useMenuCartContext();

  const increase = () => {
    setAmount((prev) => (prev === amount ? prev + 1 : amount));
  };

  const decrease = () => {
    setAmount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <>
      <div className={style.product}>
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}>
          <Pictures
            desktop={product?.image?.desktop}
            tablet={product?.image?.tablet}
            mobile={product?.image?.mobile}
            widthMob="654"
            heightMob="654"
            widthTab="562"
            heightTab="960"
            widthDesk="1080"
            heightDesk="1120"
            alt={`${product?.name} image`}
          />
        </motion.div>
        <div className={style['product__textWrapper']}>
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
              onClick={() => {
                addToCart(product, amount, product?.id);
                toggleCart();
              }}
            >
              add to cart
            </button>
          </div>
        </div>
      </div>

      {/* features */}
      <div className={style.features}>
        <div className={style['features__textWrapper']}>
          <h3 className={style['features__title']}>features</h3>
          <div className={style['features__description']}>
            {splitText(product?.features)}
          </div>
        </div>
        <div className={style['features__insidesWrapper']}>
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
        </div>
      </div>

      {/* gallery */}
      <div className={style.gallery}>
        <Pictures
          desktop={product?.gallery?.first?.desktop}
          tablet={product?.gallery?.first?.tablet}
          mobile={product?.gallery?.first?.mobile}
          widthMob="654"
          heightMob="348"
          widthTab="554"
          heightTab="348"
          widthDesk="445"
          heightDesk="280"
        />
        <Pictures
          desktop={product?.gallery?.second?.desktop}
          tablet={product?.gallery?.second?.tablet}
          mobile={product?.gallery?.second?.mobile}
          widthMob="654"
          heightMob="348"
          widthTab="554"
          heightTab="348"
          widthDesk="445"
          heightDesk="280"
        />
        <Pictures
          desktop={product?.gallery?.third?.desktop}
          tablet={product?.gallery?.third?.tablet}
          mobile={product?.gallery?.third?.mobile}
          widthMob="654"
          heightMob="736"
          widthTab="790"
          heightTab="736"
          widthDesk="635"
          heightDesk="592"
        />
      </div>

      {/* alternatives */}
      <div className={style.alternatives}>
        <h2 className={style['alternatives__title']}>you may also like</h2>
        <ul className={style['alternatives__list']}>
          {product?.others?.map((other, index) => {
            const { desktop, tablet, mobile } = other?.image;
            const { name, slug, category } = other;
            return (
              <li className={style['alternatives__item']} key={index}>
                <picture>
                  <source
                    media="(min-width:1440px)"
                    srcSet={getImageUrl(desktop)}
                    width="700"
                    height="636"
                  />
                  <source
                    media="(min-width:768px)"
                    srcSet={getImageUrl(tablet)}
                    width="446"
                    height="636"
                  />
                  <source
                    media="(min-width:375px)"
                    srcSet={getImageUrl(mobile)}
                    width="654"
                    height="240"
                  />
                  <img
                    src={getImageUrl(mobile)}
                    alt=""
                    width="654"
                    height="240"
                  />
                </picture>
                <h5>{name}</h5>
                <Link to={`/products/${category}/${slug}`} className="button-1">
                  see product
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Product;
