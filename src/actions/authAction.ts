import { ThunkDispatch } from "redux-thunk";
import { Axios } from '../helper/axios_config';
import { authType, IauthAction, IauthReducer } from '../reducers/authReducer';

export const setLoading = (_loading_state: boolean) => (dispatch: any) => {
  dispatch({
    type: authType.AUTH_LOADING,
    payload: {
      isLoading: _loading_state,
    }
  });
}

export const login = (_email: string | null, _password: string | null) => async (dispatch: ThunkDispatch<IauthReducer, void, IauthAction>) => {
  try {
    const login_response = await Axios.post('/login', { email: _email, password: _password });
    console.log(login_response);
    if (login_response.data.isLoggedIn === false) {
      dispatch({
        type: authType.AUTH_LOADED,
        payload: {
          isLoading: false,
          isLoggedIn: login_response.data.isLoggedIn,
          user: login_response.data.user,
          role: login_response.data.role.role,
          errors: [],
          message: 'email or password is wrong'
        }
      });
    } else {
      dispatch({
        type: authType.AUTH_LOADED,
        payload: {
          isLoading: false,
          isLoggedIn: true,
          user: login_response.data.user,
          role: login_response.data.role.role,
          errors: [],
          message: ''
        }
      });
    }
  } catch (error) {
    console.log(error.response.data)
    dispatch({
      type: authType.AUTH_FAILED,
      payload: {
        isLoading: false,
        isLoggedIn: false,
        user: [],
        role: '',
        errors: error.response.data.errors,
        message: error.response.data.message
      }
    });
  }
}

export const auth_status = () => async (dispatch: ThunkDispatch<IauthReducer, void, IauthAction>) => {
  const auth_status_response = await Axios.get('/auth_status');
  dispatch({
    type: authType.AUTH_LOADED,
    payload: {
      isLoading: false,
      isLoggedIn: auth_status_response.data.isLoggedIn,
      user: auth_status_response.data.user,
      role: auth_status_response.data.role.role,
      errors: [],
      message: ''
    }
  });
}

export const logout = () => async (dispatch: ThunkDispatch<IauthReducer, void, IauthAction>) => {
  const logout_response = await Axios.get('/logout');
  dispatch({
    type: authType.AUTH_LOGOUT,
    payload: {
      isLoading: false,
      isLoggedIn: logout_response.data.isLoggedIn,
      user: [],
      role: '',
      errors: [],
      message: ''
    }
  });
}
