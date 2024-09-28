import axios from 'axios';

export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const VERIFY_OTP_SUCCESS = 'VERIFY_OTP_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';


const loginSuccess = (token, role) => ({
    type: LOGIN_SUCCESS,
    payload: { token, role }
});

const signupSuccess = () => ({
    type: SIGNUP_SUCCESS
});

const verifyOtpSuccess = () => ({
    type: VERIFY_OTP_SUCCESS,
});

const authFailure = (error) => ({
    type: AUTH_FAILURE,
    payload: error
});

const baseUrl = "http://localhost:8080/";

export const login = (email, password, navigate) => async (dispatch) => {
    try {
        const response = await axios.post(`${baseUrl}api/auth/login`, { email, password });
        const { token, role } = response.data;
        console.log("message me "+response.data);
        localStorage.setItem('token', token);
        localStorage.setItem('role', role);
        dispatch(loginSuccess(token, role));

        navigate('/dashboard');
    } catch (error) {
        dispatch(authFailure(error.response.data.message));
    }
};

export const signup = (email, password, confirmPassword, role, navigate) => async (dispatch) => {
    try {
        await axios.post(`${baseUrl}api/auth/sign-up`, { email, password, confirmPassword, role });
        dispatch(signupSuccess());
        navigate('/verifyotp')
    } catch (error) {
        dispatch(authFailure(error.response.data.message));
    }
};

export const verifyOtp = (email, Otp, navigate) => async (dispatch) => {
    try {
        const otp = Number(Otp);
        await axios.post(`${baseUrl}api/auth/verify`, { email, otp });
        dispatch(verifyOtpSuccess());
        navigate('/login')
    } catch (error) {
        dispatch(authFailure(error.response.data.message));
    }
};
