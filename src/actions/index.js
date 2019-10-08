import types from "./types";
import axios from "axios";

export const userSignIn = () => {
  return {
    type: types.SIGN_IN
  };
};

export const userSignOut = () => {
  return {
    type: types.SIGN_OUT
  };
};
