import { Actions } from '../constants/actions';

export interface IOverviewReducer {
  summary: any;
  subscribedIngredients: any;
}

const initialState: IOverviewReducer = {
  summary: {},
  subscribedIngredients: {}
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
        subscribedIngredients: {
          ...action.payload
        }
      };

    default:
      return state;
  }
};
