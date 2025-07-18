import Axios, { AxiosError } from "axios";

const Api = Axios.create({
  baseURL: "/api",
});

Api.interceptors.response.use(
  ({ headers, data }) => {
    const total = headers["x-total-count"] || headers["x-wp-totalpages"];

    if (total != null) {
      return {
        total: parseInt(total),
        list: data,
      };
    }

    return data;
  },
  (error: AxiosError<{ message?: string }>) => {
    const message = error?.response?.data?.message || "Ocorreu um erro";

    return Promise.reject(new Error(message));
  }
);

export default Api;
