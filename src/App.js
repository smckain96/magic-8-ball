import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { magic8Ball } from './actions/magic8Ball';

class App extends Component {
  componentWillMount() {
    console.log(this.state)
  }
  render() {
    return (
      <div className="App">
        <h1>aaaaa</h1>
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
