import Api from "./api";

export default {
  fetchQuery(Query) {
    return Api()
      .get("/", {
        params: {
          query: `${Query}`,
        },
      })
      .then((response) => console.log(response));
  },
};
