// types
export enum authType {
  AUTH_LOADING,
  AUTH_LOADED,
  AUTH_FAILED,
  AUTH_LOGOUT
}
// action types
export interface IauthAction {
  type: authType,
  payload: IauthReducer
}
// return state types
export interface IauthReducer {
  isLoading: boolean,
  isLoggedIn: boolean,
  user: Array<any>,
  role: string,
  errors: Array<string>,
  message: string
}
// initState
const initState: IauthReducer = {
  isLoading: false,
  isLoggedIn: false,
  user: [],
  role: '',
  message: '',
  errors: []
};
// reducer
const authReducer = (state = initState, action: IauthAction): IauthReducer => {
  switch (action.type) {
    case authType.AUTH_LOADING:
      return { ...state, isLoading: action.payload.isLoading };
    case authType.AUTH_LOADED:
      return { ...state, isLoading: action.payload.isLoading, isLoggedIn: action.payload.isLoggedIn, user: action.payload.user, role: action.payload.role, errors: action.payload.errors, message: action.payload.message }
    case authType.AUTH_FAILED:
      return { ...state, isLoading: action.payload.isLoading, errors: action.payload.errors, message: action.payload.message };
    case authType.AUTH_LOGOUT:
      return { ...state, isLoading: action.payload.isLoading, isLoggedIn: action.payload.isLoggedIn, errors: action.payload.errors, message: action.payload.message };
    default:
      return state;
  }
}

export default authReducer;

