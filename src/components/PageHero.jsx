import React from 'react';

const PageHero = ({ category }) => {
  return (
    <section className="pageHero">
      <h2 className="pageHero__title">{category}</h2>
    </section>
  );
};

export default PageHero;
