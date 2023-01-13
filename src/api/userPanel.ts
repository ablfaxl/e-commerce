import React from 'react';

import axios from 'axios';

const userApi = axios.create({
  baseURL: 'http://localhost:4313/',
});

//SING UP STEP ONE
export const singUpOne = async () => {
  const res = await userApi.post('user/sign-up-one');
  return res.data;
};

// SIGN UP STEP TWO
export const singUpTwo = async () => {
  const res = await userApi.post('user/sign-up-two');
  return res.data;
};

// LOGIN USER STEP ONE
export const loginUserOne = async () => {
  const res = await userApi.post('user/login-one');
  return res.data;
};

// LOGIN USER STEP TWO
export const loginUserTwo = async () => {
  const res = await userApi.post('user/login-two');
  return res.data;
};

//BUG
// ME USER
export const meUser = async () => {
  const res = await userApi.get('user/me');
  return res.data;
};

// EDIT USER
export const editUser = async () => {
  const res = await userApi.post('user/edit');
  return res.data;
};

