import axios from 'axios';

const adminApi = axios.create({
  baseURL: 'http://localhost:4313/',
});
// CREATE ADMIN
export const createAdmin = async () => {
  const res = await adminApi.post('admin/create');
  return res.data;
};
// LOGIN ADMIN
export const loginAdmin1 = async () => {
  const res = await adminApi.post('admin/login-step-one');
  return res.data;
};

export const loginAdmin12 = async () => {
  const res = await adminApi.post('admin/login-step-two');
  return res.data;
};
//BUG
// ADMIN ME
export const admin = async () => {
  const res = await adminApi.post('admin/me');
  return res.data;
};

// CREATE CATEGORY
export const createCategory = async () => {
  const res = await adminApi.post('category/create');
  return res.data;
};

// CREATE PRODUCTS
export const createProduct = async () => {
  const res = await adminApi.post('product/create');
  return res.data;
};

// EDIT PRODUCT
export const editProduct = async () => {
  const res = await adminApi.post('products/edit');
  return res.data;
};

// ADD CART
export const addCart = async () => {
  const res = await adminApi.post('cart/add');
  return res.data;
};

// REMOVE CART
export const removeCart = async () => {
  const res = await adminApi.post('cart/remove');
  return res.data;
};

// CHANGE CART
export const changeCart = async () => {
  const res = await adminApi.post('cart/change');
  return res.data;
};

export default adminApi;
