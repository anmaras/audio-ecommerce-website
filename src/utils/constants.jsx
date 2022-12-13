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
      './assets/shared/desktop/image-category-thumbnail-headphones.png',
    category: 'headphones',
  },
  {
    id: 3,
    text: 'speakers',
    url: '/products/speakers',
    thumbnail: './assets/shared/desktop/image-category-thumbnail-speakers.png',
    category: 'speakers',
  },
  {
    id: 4,
    text: 'earphones',
    url: '/products/earphones',
    thumbnail: './assets/shared/desktop/image-category-thumbnail-earphones.png',
    category: 'earphones',
  },
];

const socialLinks = [
  {
    id: 1,
    text: 'facebook',
    img: './assets/shared/desktop/icon-facebook.svg',
  },
  {
    id: 2,
    text: 'twitter',
    img: './assets/shared/desktop/icon-twitter.svg',
  },
  {
    id: 3,
    text: 'instagram',
    img: './assets/shared/desktop/icon-instagram.svg',
  },
];

const previewProducts = [
  {
    id: 5,
    title: 'zx9',
    category: 'speakers',
    description:
      'Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.',
    mobile: './assets/home/mobile/image-speaker-zx9.png',
    tablet: './assets/home/tablet/image-speaker-zx9.png',
    desktop: './assets/home/desktop/image-speaker-zx9.png',
    decoration: './assets/home/desktop/pattern-circles.svg',
    slug: 'zx9-speaker',
  },
  {
    id: 4,
    title: 'zx7',
    category: 'speakers',
    description: '',
    mobile: './assets/home/mobile/image-speaker-zx7.jpg',
    tablet: './assets/home/tablet/image-speaker-zx7.jpg',
    desktop: './assets/home/desktop/image-speaker-zx7.jpg',
    decoration: '',
    slug: 'zx7-speaker',
  },
  {
    id: 0,
    title: 'yx1',
    category: 'earphones',
    description: '',
    mobile: './assets/home/mobile/image-earphones-yx1.jpg',
    tablet: './assets/home/tablet/image-earphones-yx1.jpg',
    desktop: './assets/home/desktop/image-earphones-yx1.jpg',
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
        label: 'Name',
      },
      {
        id: 20,
        name: 'email',
        type: 'email',
        placeholder: 'email',
        label: 'Email address',
      },
      {
        id: 30,
        name: 'phone',
        type: 'tel',
        placeholder: '+1 202-555-0136',
        label: 'Phone number',
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
        label: 'Your address',
      },
      {
        id: 50,
        name: 'zip',
        type: 'text',
        placeholder: '10001',
        label: 'ZIP Address',
      },
      {
        id: 60,
        name: 'city',
        type: 'text',
        placeholder: 'New York',
        label: 'City',
      },
      {
        id: 70,
        name: 'country',
        type: 'text',
        placeholder: 'United States',
        label: 'Country',
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
        label: 'e-Money Number',
      },
      {
        id: 110,
        name: 'eMoney_pin',
        type: 'text',
        placeholder: '6891',
        label: 'e-Money Pin',
      },
    ],
  },
];

const productsUrl =
  'https://audio-data-fc218-default-rtdb.europe-west1.firebasedatabase.app/data.json';

export { links, socialLinks, previewProducts, productsUrl, inputs };
