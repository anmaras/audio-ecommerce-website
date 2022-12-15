export const getImageUrl = (name) => {
  if (name) {
    return new URL(`../${name.substring(2)}`, import.meta.url).href;
  }
};

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumSignificantDigits: 6,
  }).format(number);
};

export const splitText = (text) => {
  return text?.split('\n').map((para, index) => {
    if (index !== 1) {
      return <p key={index}>{para}</p>;
    }
  });
};

export const formatName = (name) => {
  if (name) {
    const newName = name.split(' ');
    newName.pop();

    return newName.join(' ');
  }
};

export const scrollToTop = () => {
  setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 500);
};
