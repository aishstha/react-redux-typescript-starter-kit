import * as storage from '../utils/storage';
import { ACCESS_TOKEN, REFRESH_TOKEN, USER_DETAILS, ROLE } from '../constants/appConstant';

/**
 * Set access token
 * @param {string} token
 */
export function setAccessToken(token: string) {
  storage.set(ACCESS_TOKEN, token);
}

/**
 * @return {string}
 */
export function getAccessToken() {
  return storage.get(ACCESS_TOKEN);
}

/**
 * Set access token
 * @param {string} token
 */
export function setRefreshToken(token: string) {
  storage.set(REFRESH_TOKEN, token);
}

/**
 * @return {string}
 */
export function getRefreshToken() {
  return storage.get(REFRESH_TOKEN);
}

/**
 * Set user details
 * @param {string} token
 */
export function setUserDetails(data: any) {
  storage.set(USER_DETAILS, data);
}

/**
 * @return {string}
 */
export function getUserDetails() {
  return storage.get(USER_DETAILS);
}

/**
 * Set tenant id
 * @param {string} token
 */
export function setRole(role: string) {
  storage.set(ROLE, role);
}

/**
 * @return {string}
 */
export function getRole() {
  return storage.get(ROLE);
}

/**
 * Make local storage empty
 */
export function clear() {
  storage.clear();
}
