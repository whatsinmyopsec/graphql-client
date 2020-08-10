import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

export default () => {
  return axios.create({
    baseURL: "https://graphql-server-1.herokuapp.com/",
  });
};
