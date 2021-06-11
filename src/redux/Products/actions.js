
import { actionTypes } from '../Products/actionTypes';
import {getProducts} from 'Config/axiosClient'




export const productsIsLoading = bool => ({
  type: actionTypes.PRODUCTS_IS_LOADING,
  isLoading: bool,
});

export const productsFetchDataSuccess = products => ({
  type: actionTypes.PRODUCTS_FETCH_DATA_SUCCESS,
  products,
});

export const productsFetchData = () => async dispatch => {
  dispatch(productsIsLoading(true));
  const products = await getProducts();
  dispatch(productsFetchDataSuccess(products));
  dispatch(productsIsLoading(false));
};
