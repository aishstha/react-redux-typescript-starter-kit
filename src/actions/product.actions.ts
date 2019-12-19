import { Actions } from '../constants/actions';

export const simpleAction = () => ({
  type: Actions.productActions.SIMPLE_ACTION
});

export const getAllProducts = (payload: any) => ({
  type: Actions.productActions.GET_ALL_PRODUCTS,
  payload
});
