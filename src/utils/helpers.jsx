export const imageUrls = (url) => {
  const input = url.startsWith('/src');

  if (input) {
    return url;
  } else {
    return `/src${url.substring(1)}`;
  }
};
