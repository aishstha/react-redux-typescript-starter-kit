/* 
  src/reducers/simpleReducer.js
*/
export default (state = {}, action) => {
  switch (action.type) {
    case 'SIMPLE_ACTION':
      return {
        result: action.payload
      };
    //TODO CHANGE THIS

    case 'GET_ALL_PRODUCTS':
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
