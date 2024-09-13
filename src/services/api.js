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

//Accounts

export const createBankAccount = async (user_id, account_type, currency) => {
  const balance = 0;
  return axios.post(`${API_URL}/accounts/`, {
    user_id,
    account_type,
    balance,
    currency,
  });
};

export const readBankAccount_ByUser = async (user_id) => {
  return axios.post(`${API_URL}/accounts/all`, {
    user_id,
  });
};

export const deleteBankAccount = async (accountId) => {
  return axios.delete(`${API_URL}/accounts/${accountId}`);
};
