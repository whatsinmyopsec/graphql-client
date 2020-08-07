import Api from "./api";

export default {
  fetchQuery(Query) {
    return Api().get(`/?query=${Query}`, {
      headers: { "Content-type": "application/json" },
    });
  },
};
