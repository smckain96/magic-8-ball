import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { bindActionCreators } from 'redux';
import { magic8Ball } from '../actions/magic8Ball';

class Ask8BallForm extends Component {
  askThe8Ball(question) {
    console.log(magic8Ball(question))
  }

  render() {
    return (
      <div>
        <div className="eight-ball-image">
          <img src="https://i.imgflip.com/1c8tfl.jpg" alt="aaaaa"/>
        </div>
        <div className="eight-ball-form">
          <form onSubmit={ this.props.handleSubmit(this.askThe8Ball) }>
            <div>
              <label htmlFor="ask">Ask The 8 Ball: &nbsp;</label>
              <Field className="form-control" name="question" component="input" type="text"/>
              <button type="submit" className="btn btn-primary">
                Ask away!
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  }

}

function mapDispatchToProps(dispatch) {
  return {
    magic8Ball: bindActionCreators(magic8Ball, dispatch),
  }
}

Ask8BallForm = reduxForm({
  form: 'ask8BallForm'
})(Ask8BallForm)

export default connect(null, mapDispatchToProps)(Ask8BallForm);
