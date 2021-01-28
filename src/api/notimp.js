import axios from "axios";
var localhost = "http://10.100.102.23:4000";
var heroku = "https://evening-harbor-31111.herokuapp.com/";
export const notimp_feed_socket_endpoint = "http://10.100.102.23:4001";
export default axios.create({
  baseURL: localhost,
});
