import React from 'react';
import mobile from '../assets/shared/mobile/image-best-gear.jpg';
import tablet from '../assets/shared/tablet/image-best-gear.jpg';
import desktop from '../assets/shared/desktop/image-best-gear.jpg';
import { Images } from '../components/index';
const images = { desktop, tablet, mobile };

const About = () => {
  return (
    <section className="about">
      <Images images={images} alt={'man listening to music with headphones'} />
      <div className="about__text-wrapper">
        <h2 className="about__title">
          bringing you the <span className="about__span">best</span> audio gear
        </h2>
        <p className="about__text">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
    </section>
  );
};

export default About;
