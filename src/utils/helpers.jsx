export const imageUrls = (url) => {
  const input = url.startsWith('/src');

  if (input) {
    return url;
  } else {
    return `/src${url.substring(1)}`;
  }
};

export const formatPrice = (number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
    maximumSignificantDigits: 3,
  }).format(number);
};
