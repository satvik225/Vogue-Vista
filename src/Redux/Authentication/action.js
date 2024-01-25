import axios from "axios";
//https://pear-brainy-ant.cyclic.app
import { setToast } from "../../utils/Other";
import * as data from "./actionType";

const signUp = (payload, toast, navigate) => (dispatch) => {
  dispatch({ type: data.SIGNUP_FAILURE });
  return axios
    .post("https://vogue-vista-server.onrender.com/auth/signup", payload)
    .then((r) => {
      console.log(r);
      setToast(toast, "Signup Successful", "success");
      dispatch({ type: data.SIGNUP_SUCCESS, payload: r.data });
      navigate("/login");
    })
    .catch((e) => {
      setToast(toast, e.response.data.message, "error");
      dispatch({ type: data.SIGNUP_FAILURE, payload: e });
    });
};

const LoginUser = (payload, toast, navigate) => async (dispatch) => {
  dispatch({ type: data.LOGIN_REQUEST });
  return await axios
    .post("https://vogue-vista-server.onrender.com/auth/login", payload)
    .then((r) => {
      localStorage.setItem("token", r.data.token);
      localStorage.setItem("userId", r.data._id);
      setToast(toast, "Login Successfully", "success");
      dispatch({ type: data.LOGIN_SUCCESS, payload: r.data });
      if (r.data.role === "Admin") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    })
    .catch((e) => {
      setToast(toast, e.response.data.message, "error");
      dispatch({ type: data.LOGIN_FAILURE, payload: e });
    });
};
export { signUp, LoginUser };
