import authenticateReducer from 'redux/Authenticate/reducer';
import category from 'redux/Category/reducer';
import products from 'redux/Products/reducer';
import cart from 'redux/Cart/reducer';

//Include all the reducer to combine and provide to configure store.
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  authenticateReducer,
  category,
  products,
  cart,
}
