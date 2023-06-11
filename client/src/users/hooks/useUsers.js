import React, {useCallback, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useUser} from '../providers/UserProvider';
import useAxios from '../../hooks/useAxios';
import {login} from '../services/usersApiService';
import {getUser, setTokenInLocalStorage} from '../services/localStorageService';
import ROUTES from '../../routes/routesModel';

const useUsers = () => {
  const [users, setUsers] = useState (null);
  const [pending, setPending] = useState (false);
  const [error, setError] = useState (null);

  const navigate = useNavigate ();
  const {user, setUser, setToken} = useUser ();
  useAxios ();

  const requestStatus = useCallback (
    (pending, error, users, user = null) => {
      setPending (pending);
      setUsers (users);
      setUser (user);
      setError (error);
    },
    [setUser]
  );

  const handleLogin = useCallback (
    async user => {
      try {
        const token = await login (user);
        setToken (token);
        setTokenInLocalStorage (token);
        const userFromLocalStorage = getUser ();
        requestStatus (false, null, null, userFromLocalStorage);
        navigate (ROUTES.CARDS);
      } catch (error) {
        requestStatus (false, error, null);
      }
    },
    [navigate, requestStatus, setToken]
  );

  return {pending, error, user, users, handleLogin};
};

export default useUsers;
