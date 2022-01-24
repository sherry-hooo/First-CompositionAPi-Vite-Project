import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:3800',
  withCredentials: false
});

export default {
  getAllCustomerData() {
    console.log('get api');
    return apiClient.get(`/users/`);
  },
  getSingleCustomerData(id) {
    console.log('get api');
    return apiClient.get(`/users/${id}`);
  },
  postCustomerData(data) {
    console.log('postapi');
    return apiClient.post('/users', {
      ...data
    });
  },
  patchCustomerData(id, data) {
    console.log('postapi');
    return apiClient.patch(`/users/${id}`, {
      ...data
    });
  }
};
