import axios from 'axios';

const useAxios = () => {
  axios.interceptors.request.use (data => {
    console.log (data);
    console.log ('Entered useAxios request');
    return Promise.resolve (data);
  }, null);

  axios.interceptors.response.use (
    data => {
      console.log (data);
      console.log ('Entered useAxios response');
      return Promise.resolve (data);
    },
    error => {
      console.log ('Entered useAxios reponse - error');
      return Promise.reject (error);
    }
  );
};

export default useAxios;
