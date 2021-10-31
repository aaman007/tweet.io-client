import { BASE_URL } from "../../constants";
import { uiActions } from "../slices/ui";
import { authActions } from "../slices/auth";
import { home as homeUrl } from "../../urls";
import fetchify from "../../utils/fetchify";


export const loginAction = (data, history) => async dispatch => {
    const sendRequest = async () => {
        return await fetchify(`${BASE_URL}/accounts/v1/login/`, 200, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const data = await sendRequest();
        dispatch(authActions.login(data));
        dispatch(uiActions.setAlert({
            type: 'success',
            title: 'Success',
            description: 'Logged in successfully!'
        }));
        history.push(homeUrl());
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Login Failed',
            description: error.message
        }))

    }
};

export const registerAction = (data, history) => async dispatch => {
    const sendRequest = async () => {
        return await fetchify(`${BASE_URL}/accounts/v1/register/`, 201, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const data = await sendRequest();
        dispatch(authActions.login(data));
        dispatch(uiActions.setAlert({
            type: 'success',
            title: 'Success',
            description: 'Registered successfully!'
        }));
        history.push(homeUrl());
    }
    catch (error) {
        dispatch(uiActions.setAlert({
            type: 'error',
            title: 'Registration Failed',
            description: error.message
        }))

    }
}