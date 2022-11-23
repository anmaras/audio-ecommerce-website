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
    id: 1,
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
    id: 2,
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
    id: 3,
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

const productsUrl =
  'https://audio-data-fc218-default-rtdb.europe-west1.firebasedatabase.app/data.json';

export { links, socialLinks, previewProducts, productsUrl };
