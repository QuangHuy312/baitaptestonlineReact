import { Button, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchQuestion } from "../store/actions/question";
import MutipleChoiceQuestion from "./mutipleChoiceQuestion";
import WriteQuestion from "./writeQuestion";

class Home extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    let result = 0;
    this.props.answerList.filter((answer) => {
      if (answer.answers.exact) {
        result++;
      }
    });
    alert(`Bạn đã đúng : ${result}/${this.props.questionList.length} câu`);
    this.setState({ answers: [] });
  };
  render() {
    return (
      <form
        onSubmit={this.handleSubmit}
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        <Typography variant="h2" align="center">
          Online Test
        </Typography>

        {this.props.questionList.map((question) => {
          if (question.questionType === 1)
            return <MutipleChoiceQuestion question={question} />;
          else return <WriteQuestion question={question} />;
        })}
        <div style={{ textAlign: "center", marginTop: 25 }}>
          <Button type="submit" variant="contained" color="primary">
            Nộp bài
          </Button>
        </div>
      </form>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchQuestion);
  }
}

const mapStateToProps = (state) => ({
  questionList: state.questions.questionList,
  answerList: state.questions.answerList,
});

export default connect(mapStateToProps)(Home);
