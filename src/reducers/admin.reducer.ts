import { Actions } from "../constants/actions";
import { number } from "prop-types";

export interface IOverviewReducer {
  reports: any;
  selectedReportId: any | string | number; //TODO Change here
  selectedReport: any;
}

const initialState: IOverviewReducer = {
  reports: [],
  selectedReportId: "",
  selectedReport: {}
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case Actions.adminPageActions.SET_REPORT:
      return {
        ...state,
        reports: [...action.payload]
      };

    case Actions.adminPageActions.ADD_NEW_REPORT:
      return {
        ...state,
        reports: [...state.reports, action.payload]
      };

    case Actions.adminPageActions.SELECT_REPORT:
      return {
        ...state,
        selectedReportId: action.payload,
        selectedReport: state.reports.find(
          (item: any) => item.id == action.payload
        ) //TODO
      };

    case Actions.adminPageActions.UPDATE_REPORT:
      return {
        ...state,
        reports: [...state.reports, action.payload]
      };
    default:
      return state;
  }
};
