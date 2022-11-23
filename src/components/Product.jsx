import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { Pictures, Amount } from '../components/index';
import style from '../styles/components/Product.module.scss';
import { formatPrice } from '../utils/helpers';
const { main, main__title, main__description, main__price } = style;

const Product = () => {
  const { single_product: product, products } = useProductsContext();

  const desktop = `/src${product?.image?.desktop.substring(1)}`;
  const tablet = `/src${product?.image?.tablet.substring(1)}`;
  const mobile = `/src${product?.image?.mobile.substring(1)}`;

  return (
    <>
      <section className={style.product}>
        <div className={style.button}>
          <Link to={`/products/${product?.category}`}>go back</Link>
        </div>
        <picture className={style['product__picture']}>
          <source media="(min-width:1440px)" srcSet={desktop} />
          <source media="(min-width:768px)" srcSet={tablet} />
          <source media="(min-width:375px)" srcSet={mobile} />
          <img src={mobile} loading="lazy" alt={`${product?.name}`} />
        </picture>
        <p className="overline">new product</p>

        <h2 className={style['product__title']}>{product?.name}</h2>
        <p className={style['product__description']}>{product?.description}</p>
        <p className={style['product__price']}>{formatPrice(product?.price)}</p>
        <div className={style['product__wrapper-btn']}>
          <Amount />
          <button type="button" className="button-1">
            add to cart
          </button>
        </div>
      </section>
      <section className={style.features}>
        <div className={style['features__textWrapper']}>
          <h3 className={style['features__title']}>features</h3>
          <p className={style['features__description']}>{product?.features}</p>
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
      </section>
      <section>
        <Pictures
          desktop={product?.gallery?.first?.desktop}
          tablet={product?.gallery?.first?.tablet}
          mobile={product?.gallery?.first?.mobile}
        />
        <Pictures
          desktop={product?.gallery?.second?.desktop}
          tablet={product?.gallery?.second?.tablet}
          mobile={product?.gallery?.second?.mobile}
        />
        <Pictures
          desktop={product?.gallery?.third?.desktop}
          tablet={product?.gallery?.third?.tablet}
          mobile={product?.gallery?.third?.mobile}
        />
      </section>
      <section>
        <h2>you may also like</h2>
        <ul>
          {product?.others?.map((other, index) => {
            const { desktop, tablet, mobile } = other?.image;
            const { name, slug } = other;
            return (
              <li key={index}>
                <Pictures desktop={desktop} tablet={tablet} mobile={mobile} />
                <h5>{name}</h5>
                <Link to={`/products/${product.category}/${slug}`}>
                  see product
                </Link>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

export default Product;
