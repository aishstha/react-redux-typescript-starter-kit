/* 
  src/reducers/overviewReducer.js
*/
import { Actions } from '../constants/actions';

export interface IOverviewReducer {
  summary: any;
  subscribedIngredients: any;
  watchedIngredients: any;
}

const initialState: IOverviewReducer = {
  summary: {},
  subscribedIngredients: [],
  watchedIngredients: []
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.overviewActions.SET_SUMMARY:
      return {
        ...state,
        summary: {
          ...action.payload
        }
      };

    case Actions.overviewActions.SET_SUBSCRIBED_INGREDIENTS:
      return {
        ...state,
        subscribedIngredients: [action.payload]
      };

    case Actions.overviewActions.SET_WATCHED_INGREDIENTS:
      return {
        ...state,
        watchedIngredients: [...action.payload]
      };

    default:
      return state;
  }
};
