import axios from "axios";

export const fetchCatById = async (id) => {
  try {
    const res = await axios.get(`https://api.thecatapi.com/v1/images/${id}`);
    return res;
  } catch (error) {
    console.log(error);
  }
};
