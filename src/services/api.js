import axios from "axios";

const API_URL = "http://localhost:5000";

export const signUp = async (name, email, password) => {
  return axios.post(`${API_URL}/auth/signup`, { name, email, password });
};

export const signIn = async (email, password) => {
  return axios.post(`${API_URL}/auth/signin`, { email, password });
};

export const requestPasswordReset = async (email) => {
  return axios.post(`${API_URL}/auth/reset-password`, { email });
};

export const resetPassword = async (token, newPassword) => {
  return axios.post(`${API_URL}/auth/reset-password/${token}`, { newPassword });
};
