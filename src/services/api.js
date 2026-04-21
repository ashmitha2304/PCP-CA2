import axios from 'axios';

const BASE_URL = 'https://t4e-testserver.onrender.com/api';
const STUDENT_ID = 'E0423008';
const SET = 'setA';
const PASSWORD = '783522';

const getToken = async (studentId, set, password) => {
  const { data } = await axios.post(`${BASE_URL}/public/token`, {
    studentId,
    set,
    password,
  });
  return data;
};

const getDataset = async (token, dataUrl) => {
  const { data } = await axios.get(`${BASE_URL}${dataUrl}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.data.orders;
};

export const fetchOrdersData = async () => {
  try {
    const tokenData = await getToken(STUDENT_ID, SET, PASSWORD);
    const orders = await getDataset(tokenData.token, tokenData.dataUrl);
    return orders;
  } catch (err) {
    console.error('Error fetching data:', err);
    throw err;
  }
};