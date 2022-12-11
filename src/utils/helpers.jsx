export const imageUrls = (url) => {
  const input = url?.startsWith('./');

  if (input) {
    return `${url?.substring(1)}`;
  } else {
    return url;
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

export const setImageSize = (setImgDimensions, imageUrl) => {
  let obj = {};
  imageUrl.forEach((url, index) => {
    const image = new Image();
    image.src = url;

    image.onload = () => {
      if (index === 0) {
        obj['mobHeight'] = image.height;
        obj['mobWidth'] = image.width;
      }
      if (index === 1) {
        obj['tabHeight'] = image.height;
        obj['tabWidth'] = image.width;
      }
      if (index === 2) {
        obj['deskHeight'] = image.height;
        obj['deskWidth'] = image.width;
      }

      setImgDimensions(obj);
    };
  });
};
