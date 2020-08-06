import axios from "axios";

export default () => {
  return axios.create({
    baseURL: "https://graphql-server-1.herokuapp.com/",
  });
};
