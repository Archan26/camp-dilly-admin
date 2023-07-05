import Axios from "../../axios";

export  function authLogin({ username, password }) {
    return  Axios.post('http://localhost:3000/admin/login', {
        username,
        password
    })
  }