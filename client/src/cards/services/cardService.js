import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:8181';

export const getCards = async () => {
  try {
    const {data} = await axios.get (`${apiUrl}/cards`);
    return data;
  } catch (error) {
    return Promise.reject (error.message);
  }
};

export const getCard = async id => {
  try {
    const {data} = await axios.get (`${apiUrl}/cards/${id}`);
    return data;
  } catch (error) {
    return Promise.reject (error.messgae);
  }
};