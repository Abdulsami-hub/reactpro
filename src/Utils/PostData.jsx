import axios from "axios";
export const callapi = async (pageParam, limitParam) => {
  const response = await axios.get(
    `http://localhost:8000/api/posts?_limit=${limitParam}&page=${pageParam}`
  );
  return response?.data;
};
export const postDetails = async (id) => {
  const response = await axios
    .get(`http://localhost:8000/api/posts/${id}`)
    .then((response) => response.data);
  return response?.data;
};
