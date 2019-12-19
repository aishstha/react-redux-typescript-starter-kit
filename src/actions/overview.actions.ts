import { Actions } from '../constants/actions';

export const setSummary = (payload: any) => ({
  type: Actions.overviewActions.SET_SUMMARY,
  payload
});

export const setSubscribedIngredients = (payload: any) => ({
  type: Actions.overviewActions.SET_SUBSCRIBED_INGREDIENTS,
  payload
});
