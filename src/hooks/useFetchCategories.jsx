import axios from 'axios';
import { useQuery } from 'react-query';
import { productsUrl as url } from '../utils/constants';

const fetchProducts = () => {
  return axios.get(url);
};

export const useFetchCategories = (category) => {
  return useQuery(['category', category], fetchProducts, {
    select: (data) =>
      data.data.filter((product) => product.category === category),
    staleTime: 300000,
  });
};
