import React from 'react';
import mobileUrl from '../assets/shared/mobile/image-best-gear.jpg';
import tabletUrl from '../assets/shared/tablet/image-best-gear.jpg';
import desktopUrl from '../assets/shared/desktop/image-best-gear.jpg';

const About = () => {
  return (
    <section className="about">
      <picture className="about__picture">
        <source media="(min-width:1220px)" srcSet={desktopUrl} />
        <source media="(min-width:715px)" srcSet={tabletUrl} />
        <source media="(min-width:375px)" srcSet={mobileUrl} />
        <img
          className="about__image"
          src={mobileUrl}
          alt="man listening music with headphones"
        />
      </picture>
      <h2 className="about__title">
        bringing you the <span className="about__span">best</span> audio gear
      </h2>
      <p className="about__text">
        Located at the heart of New York City, Audiophile is the premier store
        for high end headphones, earphones, speakers, and audio accessories. We
        have a large showroom and luxury demonstration rooms available for you
        to browse and experience a wide range of our products. Stop by our store
        to meet some of the fantastic people who make Audiophile the best place
        to buy your portable audio equipment.
      </p>
    </section>
  );
};

export default About;
