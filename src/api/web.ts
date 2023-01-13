import axios from 'axios';

const webApi = axios.create({
  baseURL: 'http://localhost:4313/',
});

// GET CART
const getCart = async () => {
  const res = await webApi.post('cart');
};

// GET CATEGORY
const getCategory = async () => {
  const res = await webApi.get('category');
};

// SUBMIT COMMENT
export const submitComment = async () => {
  const res = await webApi.post('comment/submit');
  return res.data;
};

// GET COMMENT //BUG
export const getComment = async (productId: any) => {
  const res = await webApi.get(`comment/${productId}`);
  return res.data;
};

// GET ORDER
export const getOrder = async () => {
  const res = await webApi.get('order/my-order');
  return res.data;
};

// GET ALL PRODUCTS
export const getProducts = async () => {
  const res = await webApi.get('product');
  return res.data;
};

//TOP PRODUCTS
export const getTopProducts = async () => {
  const res = await webApi.get('top-products');
  return res.data;
};

// SINGLE PRODUCT //BUG
export const getSingleProducts = async (_id: any) => {
  const res = await webApi.get(`product/${_id}`);
  return res.data;
};

// RATE PRODUCT
export const rateProduct = async () => {
  const res = await webApi.post('rate/submit');
  return res.data;
};


