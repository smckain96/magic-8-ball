import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { magic8Ball } from './actions/magic8Ball';
import Ask8BallForm from './components/Ask8BallForm';
import BallResult from './components/BallResult';

class App extends Component {
  componentWillMount() {
    console.log(this.props.magic8Ball)
  }
  render() {
    return (
      <div className="App">
        <Ask8BallForm />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    magic8Ball: state.magic8Ball
  }
}

function mapDispatchToProps(dispatch) {
  return {
    magic8Ball: bindActionCreators(magic8Ball, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
