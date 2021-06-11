import actions from 'redux/Category/actions';

const initialState = {
  categoryActive:1,
}

function Reducer(state = initialState, action) {
  switch (action.type) {
    case actions.CATEGORY_ACTIVE:
      return {
        ...state,
        categoryActive: action.payload,
      };
    
    default:
      return state
  }
}

export default Reducer;
