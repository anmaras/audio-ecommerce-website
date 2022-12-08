import React from 'react';
import mobile from '../assets/shared/mobile/image-best-gear.jpg';
import tablet from '../assets/shared/tablet/image-best-gear.jpg';
import desktop from '../assets/shared/desktop/image-best-gear.jpg';
import { Pictures } from '../components/index';
import style from '../styles/components/About.module.scss';
import { motion } from 'framer-motion';
import {
  aboutVariant,
  aboutTitleVariant,
  aboutTextVariant,
} from '../AnimationVariants/variants';

const About = () => {
  return (
    <section className={style.about}>
      <motion.div
        variants={aboutVariant}
        initial="initial"
        whileInView="whileInView"
      >
        <Pictures
          desktop={desktop}
          tablet={tablet}
          mobile={mobile}
          alt={'man listening to music with headphones'}
        />
      </motion.div>
      <div className={style['about__text-wrapper']}>
        <motion.h2
          variants={aboutTitleVariant}
          initial="initial"
          whileInView="whileInView"
          className={style['about__title']}
        >
          bringing you the <span className={style['about__span']}>best</span>{' '}
          audio gear
        </motion.h2>
        <motion.p
          className={style['about__text']}
          variants={aboutTextVariant}
          initial="initial"
          whileInView="whileInView"
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </motion.p>
      </div>
    </section>
  );
};

export default About;
