import { Actions } from '../constants/actions';

export const setSummary = (payload: any) => ({
  type: Actions.overviewActions.SET_SUMMARY,
  payload
});

export const setSubscribedIngredients = (payload: any) => ({
  type: Actions.overviewActions.SET_SUBSCRIBED_INGREDIENTS,
  payload
});

export const setWatchedIngredients = (payload: any) => ({
  type: Actions.overviewActions.SET_WATCHED_INGREDIENTS,
  payload
});
