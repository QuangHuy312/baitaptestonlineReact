import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { answerList } from "../../store/actions/question";
import styles from "./style";

class MutipleChoiceQuestion extends Component {
  handleChange = (e, id, answer) => {
    this.props.dispatch(
      answerList({
        questionId: id,
        answers: {
          content: e.currentTarget.value,
          exact: answer.exact,
        },
      })
    );
  };

  render() {
    const { textLable } = this.props.classes;
    const { id, content, answers } = this.props.question;
    return (
      <>
        <FormLabel component="h1" className={textLable}>
          Câu {id} :{content}
        </FormLabel>
        <RadioGroup aria-label="gender" name={content}>
          {answers.map((answer) => (
            <FormControlLabel
              key={answer.id}
              value={answer.content}
              control={<Radio />}
              label={answer.content}
              onChange={(e) => this.handleChange(e, id, answer)}
            />
          ))}
        </RadioGroup>
      </>
    );
  }
}

export default connect()(withStyles(styles)(MutipleChoiceQuestion));
