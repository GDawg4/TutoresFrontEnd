import classes, * as classesSelectors from "./classes";
import auth, * as authSelectors from "./auth";
import {combineReducers} from "redux";

const reducer = combineReducers(
    {
        classes,
        auth
    }
);

export default reducer;

export const getSelectedClass = (state) => classesSelectors.getSelectedClass(state.reducer.classes);

export const getAuthToken = state => authSelectors.getAuthToken(state.reducer.auth);
export const getIsAuthenticating = state => authSelectors.getIsAuthenticating(state.reducer.auth);
export const getAuthenticatingError = state => authSelectors.getAuthenticatingError(state.reducer.auth);
export const getAuthUserId = state => authSelectors.getAuthUserId(state.reducer.auth);
export const getAuthExpiration = state => authSelectors.getAuthExpiration(state.reducer.auth);
export const getAuthUsername = state => authSelectors.getAuthUsername(state.reducer.auth);
export const getAuthEmail = state => authSelectors.getAuthEmail(state.reducer.auth);
