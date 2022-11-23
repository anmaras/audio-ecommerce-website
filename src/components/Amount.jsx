import React from 'react';

const Amount = () => {
  return (
    <div className="amount">
      <button type="button" className="amount__decrease">
        -
      </button>
      <p className="amount__number">1</p>
      <button type="button" className="amount__increase">
        +
      </button>
    </div>
  );
};

export default Amount;
