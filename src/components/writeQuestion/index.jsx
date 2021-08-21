import { TextField, Typography, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { answerList } from "../../store/actions/question";
import styles from "./style";
import { debounce } from "lodash";

class WriteQuestion extends Component {
  constructor(props) {
    super(props);
    this.handleInputDebounce = debounce(this.handleChange, 500);
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.props.dispatch(
      answerList({
        questionId: e.target.id,
        answers: {
          content: e.target.name,
          exact:
            e.target.name.toLowerCase() === e.target.value.toLowerCase()
              ? true
              : false,
        },
      })
    );
  };
  render() {
    const { text } = this.props.classes;
    const { id, content, answers } = this.props.question;
    return (
      <>
        <Typography variant="subtitile2" component="h1" className={text}>
          Câu{id} : {content}
        </Typography>
        <TextField
          fullWidth
          label="Nhập vào đáp án"
          onChange={this.handleInputDebounce}
          id={id}
          name={answers[0].content}
        />
      </>
    );
  }
}

export default connect()(withStyles(styles)(WriteQuestion));
