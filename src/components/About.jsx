import React from 'react';
import mobile from '/assets/shared/mobile/image-best-gear.jpg';
import tablet from '/assets/shared/tablet/image-best-gear.jpg';
import desktop from '/assets/shared/desktop/image-best-gear.jpg';
import { Pictures } from '../components/index';
import style from '../styles/components/About.module.scss';
import { LazyMotion, m, domAnimation } from 'framer-motion';
import {
  aboutVariant,
  aboutTitleVariant,
  aboutTextVariant,
} from '../AnimationVariants/variants';

const About = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className={style.about}>
        <m.div
          variants={aboutVariant}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
        >
          <Pictures
            desktop={desktop}
            tablet={tablet}
            mobile={mobile}
            alt={'man listening to music with headphones'}
          />
        </m.div>
        <div className={style['about__text-wrapper']}>
          <m.h2
            variants={aboutTitleVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className={style['about__title']}
          >
            bringing you the <span className={style['about__span']}>best</span>{' '}
            audio gear
          </m.h2>
          <m.p
            className={style['about__text']}
            variants={aboutTextVariant}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </m.p>
        </div>
      </section>
    </LazyMotion>
  );
};

export default About;
