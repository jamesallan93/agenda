import axios from "axios";
// export const HTTP = axios.create({
//   baseURL: `http://api.app.io/`,
//   headers: {
//     Authorization: "Bearer " + localStorage.getItem("token"),
//   },
// });

export default () => {
  // const USER_TOKEN = localStorage.getItem("access_token");
  // const AuthStr = "Bearer ".concat(USER_TOKEN);
  return axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: { /*Authorization: AuthStr, */ "Access-Control-Allow-Origin": "*" },
    // timeout: 5000
  });
};
