import axios from 'axios';

export const writePost = async ({title, body, tags}) => {return await axios.post('/api/posts', {title, body, tags});};
export const getPost = async (id) => await axios.get(`/api/posts/id/${id}`);
export const getList = async (page) => await axios.get(`/api/posts/${page}`);
export const editPost = async ({id, title, body, tags}) => await axios.patch(`/api/posts/${id}`, {title, body, tags});