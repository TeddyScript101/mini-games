import { useLocation } from 'react-router-dom';
import React from 'react'
import axios from 'axios';
export const useQueryParams = () => {
  const location = useLocation();

  const queryParams = React.useMemo(() => {
    return Object.fromEntries(new URLSearchParams(location.search));
  }, [location.search]);

  return queryParams;
};

export const fetchByKey = async (key) => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { data } = await axios.get(`${backendUrl}/hash?key=${key}`);
    return data
  } catch (error) {
    console.error(error);
  }
}

export const weightedRandomSelection = (coupons) => {
  const totalWeight = coupons.reduce((sum, coupon) => sum + Number(coupon.weight), 0);
  let randomNum = Math.random() * totalWeight;

  console.log(totalWeight, randomNum)

  for (const coupon of coupons) {
    if (randomNum < coupon.weight) {
      return coupon;
    }
    randomNum -= coupon.weight;
  }

  return coupons[coupons.length - 1];
};

export const getWeightedRandomIndexForLuckyDraw = (weights) => {
  const totalWeight = weights.reduce((sum, weight) => sum + Number(weight), 0);
  let randomWeight = Math.random() * totalWeight;

  for (let i = 0; i < weights.length; i++) {
    randomWeight -= weights[i];
    if (randomWeight <= 0) {
      return i;
    }
  }

  return weights.length - 1;
};

export const drawCoupon = async ({ key, type }) => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const { data } = await axios.put(`${backendUrl}/coupon`, {
      key, type
    })
    return data.drawnCoupon
  } catch (error) {
    return error
  }
}
