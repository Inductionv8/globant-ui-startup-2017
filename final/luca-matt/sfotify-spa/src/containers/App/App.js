import React, { Component } from 'react';
// import logo from './logo.svg';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Home from '../Home/Home';
import ArtistList from '../ArtistList/ArtistList';
// import { connect } from 'react-redux';
// import * as songActions from '../../actions/songActions';
// import { bindActionCreators } from 'redux';

// function mapStateToProps(state) {
//   return { todos: state.todos };
// }
//
// function mapDispatchToProps(dispatch) {
//   return { actions: bindActionCreators(songActions, dispatch) };
// }

class App extends Component {
  render() {
    // console.log(this.props.song);
    // console.log(this.props.song);
    // return null;
    return (
      <ArtistList />
    );
  }
}
export default App;
// export default connect(mapStateToProps, mapDispatchToProps)(App);
