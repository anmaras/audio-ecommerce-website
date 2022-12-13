import axios from 'axios';
import { useQuery } from 'react-query';
import { productsUrl as url } from '../utils/constants';

const fetchProduct = () => {
  return axios.get(url);
};

export const useFetchProduct = (slug) => {
  return useQuery(['product', slug], fetchProduct, {
    select: (data) => data.data.find((product) => product.slug === slug),
    staleTime: 300000,
  });
};
