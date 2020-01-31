import { Dispatch } from "redux";
import Axios, { AxiosResponse } from "axios";
import { stringify } from "querystring";

import http from "../../utils/http";
import { IAppplicationState } from "../../reducers";
import { loginSuccess, loginFailure } from "../../actions/auth.actions";
import { ILogin } from "../../components/interface/auth.interface";
import {
  setReport,
  addNewReport,
  updateReport
} from "../../actions/admin.actions";

export function login(username: string, password: string) {
  return async (
    dispatch: Dispatch<any>,
    getState: () => IAppplicationState
  ) => {
    const URL = `/admin/admin/reports`;
    try {
      const response: AxiosResponse = await http.post(
        URL,
        stringify({
          username,
          password
        })
      );

      dispatch(loginSuccess(response.data));
    } catch (e) {
      loginFailure();
      throw e;
    }
  };
}

export function getReports() {
  return async (
    dispatch: Dispatch<any>,
    getState: () => IAppplicationState
  ) => {
    const URL = "/admin/reports";
    try {
      const response: AxiosResponse = await http.get(URL);

      dispatch(setReport(response.data));
    } catch (e) {
      throw e;
    }
  };
}

export function createReport(data: any) {
  return async (
    dispatch: Dispatch<any>,
    getState: () => IAppplicationState
  ) => {
    const URL = "/admin/reports";
    try {
      const response: AxiosResponse = await http.post(URL, data);

      dispatch(addNewReport(data));
    } catch (e) {
      throw e;
    }
  };
}

export function editReport(data: any) {
  return async (
    dispatch: Dispatch<any>,
    getState: () => IAppplicationState
  ) => {
    let id = getState().adminReducer.selectedReportId;

    const URL = `/admin/reports/${id}`;
    try {
      const response: AxiosResponse = await http.put(URL, data);

      // getReports();
    } catch (e) {
      throw e;
    }
  };
}
