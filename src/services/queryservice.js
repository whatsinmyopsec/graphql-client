import Api from "./api";

export default {
  fetchQuery(Query) {
    return Api().get(`${Query}`);
  },
};
