const links = [
  {
    id: 1,
    text: 'home',
    url: '/',
  },
  {
    id: 2,
    text: 'headphones',
    url: '/products/headphones',
    thumbnail:
      '/src/assets/shared/desktop/image-category-thumbnail-headphones.png',
    category: 'headphones',
  },
  {
    id: 3,
    text: 'speakers',
    url: '/products/speakers',
    thumbnail:
      '/src/assets/shared/desktop/image-category-thumbnail-speakers.png',
    category: 'speakers',
  },
  {
    id: 4,
    text: 'earphones',
    url: '/products/earphones',
    thumbnail:
      '/src/assets/shared/desktop/image-category-thumbnail-earphones.png',
    category: 'earphones',
  },
];

const socialLinks = [
  {
    id: 1,
    text: 'facebook',
    img: '/src/assets/shared/desktop/icon-facebook.svg',
  },
  {
    id: 2,
    text: 'twitter',
    img: '/src/assets/shared/desktop/icon-twitter.svg',
  },
  {
    id: 3,
    text: 'instagram',
    img: '/src/assets/shared/desktop/icon-instagram.svg',
  },
];

const previewProducts = [
  {
    id: 5,
    title: 'zx9',
    category: 'speakers',
    description:
      'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
    mobile: '/src/assets/home/mobile/image-speaker-zx9.png',
    tablet: '/src/assets/home/tablet/image-speaker-zx9.png',
    desktop: '/src/assets/home/desktop/image-speaker-zx9.png',
    decoration: '/src/assets/home/desktop/pattern-circles.svg',
    slug: 'zx9-speaker',
  },
  {
    id: 4,
    title: 'zx7',
    category: 'speakers',
    description: '',
    mobile: '/src/assets/home/mobile/image-speaker-zx7.jpg',
    tablet: '/src/assets/home/tablet/image-speaker-zx7.jpg',
    desktop: '/src/assets/home/desktop/image-speaker-zx7.jpg',
    decoration: '',
    slug: 'zx7-speaker',
  },
  {
    id: 0,
    title: 'yx1',
    category: 'earphones',
    description: '',
    mobile: '/src/assets/home/mobile/image-earphones-yx1.jpg',
    tablet: '/src/assets/home/tablet/image-earphones-yx1.jpg',
    desktop: '/src/assets/home/desktop/image-earphones-yx1.jpg',
    decoration: '',
    slug: 'yx1-earphones',
  },
];

const inputs = [
  {
    id: 1,
    category: 'billing details',
    categoryInput: [
      {
        id: 10,
        name: 'username',
        type: 'text',
        placeholder: 'Username',
        errorMessage: 'Name required',
        label: 'Name',
        require: true,
      },
      {
        id: 20,
        name: 'email',
        type: 'email',
        placeholder: 'email',
        errorMessage: 'Wrong email format',
        label: 'Email address',
        require: true,
      },
      {
        id: 30,
        name: 'phone',
        type: 'tel',
        placeholder: '+1 202-555-0136',
        errorMessage: 'Phone number required',
        label: 'Phone number',
        require: true,
      },
    ],
  },
  {
    id: 2,
    category: 'shipping info',
    categoryInput: [
      {
        id: 40,
        name: 'address',
        type: 'text',
        placeholder: '1137 Williams Avenue',
        errorMessage: 'Address required',
        label: 'Your address',
        require: true,
      },
      {
        id: 50,
        name: 'zip',
        type: 'text',
        placeholder: '10001',
        errorMessage: 'Must be a number',
        label: 'ZIP Address',
        require: true,
      },
      {
        id: 60,
        name: 'city',
        type: 'text',
        placeholder: 'New York',
        errorMessage: 'City required',
        label: 'ZIP Address',
        require: true,
      },
      {
        id: 70,
        name: 'country',
        type: 'text',
        placeholder: 'United States',
        errorMessage: 'Country required',
        label: 'Country',
        require: true,
      },
    ],
  },
  {
    id: 3,
    category: 'payment details',
    categoryInput: [
      {
        id: 80,
        name: 'radio',
        type: 'radio',
        placeholder: '',
        label: 'e-Money',
      },
      {
        id: 90,
        name: 'radio',
        type: 'radio',
        placeholder: '',
        label: 'Cash on Delivery',
      },
      {
        id: 100,
        name: 'eMoney_number',
        type: 'text',
        placeholder: '238521993',
        errorMessage: 'e-Money number required',
        label: 'e-Money Number',
        require: true,
      },
      {
        id: 110,
        name: 'eMoney-pin',
        type: 'text',
        placeholder: '6891',
        errorMessage: 'e-Money pin required',
        label: 'e-Money Pin',
        require: true,
      },
    ],
  },
];

const productsUrl =
  'https://audio-data-fc218-default-rtdb.europe-west1.firebasedatabase.app/data.json';

const productId =
  'https://audio-data-fc218-default-rtdb.europe-west1.firebasedatabase.app/data';

export { links, socialLinks, previewProducts, productsUrl, inputs, productId };
