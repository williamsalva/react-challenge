import { actionTypes } from '../Products/actionTypes';
import _ from 'lodash';


const initialState = {
  isLoading:false,
  products:[],
}
  
function Products(state = initialState, action) {
  switch (action.type) {


    case actionTypes.PRODUCTS_IS_LOADING:
      return {
        ...state,
        isLoading:action.isLoading,
      }

    case actionTypes.PRODUCTS_FETCH_DATA_SUCCESS:
      return{
        ...state,
        products: _.keyBy(action.products, 'id'),
      }

      
    default:
      return state
  }
}
  
export default Products;