import React from 'react';
import { Link } from 'react-router-dom';
import { useProductsContext } from '../context/products_context';
import { Pictures, Amount } from '../components/index';
import style from '../styles/components/Product.module.scss';
import { formatPrice, splitText } from '../utils/helpers';

const Product = () => {
  const { single_product: product } = useProductsContext();

  return (
    <>
      <div className={style.button}>
        <Link to={`/products/${product?.category}`}>go back</Link>
      </div>
      <section className={style.product}>
        <Pictures
          desktop={product?.image?.desktop}
          tablet={product?.image?.tablet}
          mobile={product?.image?.mobile}
          alt={`${product?.name} image`}
        />
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
            <Amount />
            <button type="button" className="button-1">
              add to cart
            </button>
          </div>
        </div>
      </section>

      {/* features */}

      <section className={style.features}>
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
      </section>

      {/* gallery */}

      <section className={style.gallery}>
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
      <section className={style.alternatives}>
        <h2 className={style['alternatives__title']}>you may also like</h2>
        <ul className={style['alternatives__list']}>
          {product?.others?.map((other, index) => {
            const { desktop, tablet, mobile } = other?.image;
            const { name, slug } = other;
            return (
              <li className={style['alternatives__item']} key={index}>
                <Pictures desktop={desktop} tablet={tablet} mobile={mobile} />
                <h5>{name}</h5>
                <Link
                  to={`/products/${product.category}/${slug}`}
                  className="button-1"
                >
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
