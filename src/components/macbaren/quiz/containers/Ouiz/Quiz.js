import React, { Component } from 'react'
import classes from './Quiz.module.css'
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz'
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz'
class Quiz extends Component {
  state = {
    results: {}, //{[id]: 'success', 'error'}
    isFinished: false,
    activeQuestion: 0,
    answerState: null, // {[id]: 'success', 'error'} for colors changing
    quiz: [
      {
        question: 'What is the best way to learn JS?',
        rightAnswerId: 3,
        id: 1,
        answers: [
          { text: 'University', id: 1 },
          { text: 'Online courses', id: 2 },
          { text: 'Memmes', id: 3 },
          { text: 'Daititevynahoysosvoimjsom', id: 4 },
        ],
      },
      {
        question: 'What year Mogilev was founded?',
        rightAnswerId: 3,
        id: 2,
        answers: [
          { text: '1234', id: 1 },
          { text: '1345', id: 2 },
          { text: '1273', id: 3 },
          { text: '1500', id: 4 },
        ],
      },
    ],
  }

  onAnswerClickHandler = (answerId) => {
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0]
      if (this.state.answerState[key] === 'success') return
    }
    const question = this.state.quiz[this.state.activeQuestion]
    const results = this.state.results

    if (question.rightAnswerId === answerId) {
      if (!results[question.id]) {
        results[question.id] = 'success'
      }
      this.setState({
        answerState: { [answerId]: 'success' },
        results,
      })

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          })
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null,
          })
        }
        window.clearTimeout(timeout)
      }, 1000)
    } else {
      results[question.id] = 'error'
      this.setState({
        answerState: { [answerId]: 'error' },
        results,
      })
    }
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length
  }

  retryHandler = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false,
      results: {},
    })
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all these questions</h1>
          {this.state.isFinished ? (
            <FinishedQuiz
              results={this.state.results}
              quiz={this.state.quiz}
              onRetry={this.retryHandler}
            />
          ) : (
            <ActiveQuiz
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLenght={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          )}
        </div>
      </div>
    )
  }
}

export default Quiz
