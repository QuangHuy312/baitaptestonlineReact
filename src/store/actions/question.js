import axios from "axios";
import createAction from "./createAction";
import { actionType } from "./type";

export const fetchQuestion = async (dispatch) => {
  try {
    const res = await axios({
      url: "https://5bd2959ac8f9e400130cb7e9.mockapi.io/api/questions",
      method: "GET",
    });
    console.log(res.data);
    dispatch(createAction(actionType.GET_QUESTION, res.data));
  } catch (error) {
    console.log(error);
  }
};

export const answerList = (answer) => {
  return (dispatch) => {
    dispatch(createAction(actionType.CHECK_ANSWER, answer));
  };
};
