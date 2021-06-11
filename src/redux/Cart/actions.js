import { actionTypes } from './actionTypes';

export const addProductToCart = product => ({
  type: actionTypes.ADD_PRODUCT_TO_CART,
  product,
});

export const removeProductFromCart = index => ({
  type: actionTypes.REMOVE_PRODUCT_FROM_CART,
  index,
});