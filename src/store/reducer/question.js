import { answerList } from "../actions/question";
import { actionType } from "../actions/type";

const initialState = {
  questionList: [],
  answerList: [],
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_QUESTION: {
      state.questionList = action.payload;
      return { ...state };
    }
    case actionType.CHECK_ANSWER: {
      const cloneAnswerList = [...state.answerList];
      const foundAnswer = cloneAnswerList.findIndex(
        (answer) => answer.questionId === action.payload.questionId
      );
      if (foundAnswer < 0) {
        const newAnswer = { ...action.payload };
        cloneAnswerList.push(newAnswer);
      } else {
        cloneAnswerList[foundAnswer].answers = action.payload.answers;
      }
      state.answerList = cloneAnswerList;
      return { ...state };
    }

    default:
      return state;
  }
};

export default reducer;
