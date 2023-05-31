import axios from 'axios';
import {useSnack} from '../providers/SnackbarProvider';

const useAxios = () => {
  const {setSnack} = useSnack ();
  axios.interceptors.request.use (data => {
    return Promise.resolve (data);
  }, null);

  axios.interceptors.response.use (
    data => {
      return Promise.resolve (data);
    },
    error => {
      setSnack ('error', error.message);
      return Promise.reject (error);
    }
  );
};

export default useAxios;
