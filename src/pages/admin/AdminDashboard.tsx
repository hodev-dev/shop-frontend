import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as authActions from '../../actions/authAction';
import Header from '../../components/Header';
import { IApplicationState } from '../../reducers/rootReducer';

const AdminDashboard = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, isLoggedIn, user, role, errors, message } = useSelector((store: IApplicationState) => store.authReducer);

  useEffect(() => {
    dispatch(authActions.setLoading(true));
  }, [dispatch])

  useEffect(() => {
    if (isLoading) {
      dispatch(authActions.auth_status());
    }
    if (!isLoggedIn) {
      history.replace('/login');
    }
  }, [isLoggedIn, isLoading, dispatch])

  const logOut = async () => {
    dispatch(authActions.setLoading(true));
    dispatch(authActions.logout());
  }

  return (
    <div>
      <Header />
      <button onClick={() => logOut()} className={"w-full h-16 mt-10 text-3xl font-bold text-white bg-indigo-600 rounded-lg outline-none hover:bg-indigo-700"}>logout</button>
    </div>
  )
}

export default AdminDashboard
