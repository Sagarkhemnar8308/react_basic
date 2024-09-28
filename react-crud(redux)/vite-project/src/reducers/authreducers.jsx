import { LOGIN_SUCCESS, SIGNUP_SUCCESS, VERIFY_OTP_SUCCESS, AUTH_FAILURE } from '../actions/authActions';

const initialState = {
  token: localStorage.getItem('token') || null,
  role: localStorage.getItem('role') || null,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
    case VERIFY_OTP_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        role: action.payload.role,
        error: null
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        error: null
      };
    case AUTH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
