import React, { Component } from 'react';
// import axios from 'axios';
import PropTypes from 'prop-types';

import ArticleList from './ArticleList';

// import DataApi from 'state-api';
// import { data } from '../testData';

// const api = new DataApi(data);

class App extends Component {
  // cant do this anymore bcuz data is asynchronous
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   };
  // }

  // state = {
  //   articles: this.props.articles,
  //   authors: this.props.authors
  // };

  // we are not doing this anymore since we are fetching the data already on the server side
  // async componentDidMount() {
  //   const response = await axios.get('/data');
  //   const api = new DataApi(response.data);
  //   this.setState({
  //     articles: api.getArticles(),
  //     authors: api.getAuthors()
  //   });
  // }

  // articleActions = {
  //   lookupAuthor: (authorId) => this.state.authors[authorId]
  // };

  static childContextTypes = {
    store: PropTypes.object
  };
  getChildContext = () => {
    return {
      store: this.props.store
    };
  };

  state = this.props.store.getState();

  render() {
    const { articles } = this.state;
    return <ArticleList articles={articles} />;
  }
}

export default App;

//===========================================
// PART OF INITIAL TEST CODE
//===========================================
// export default class App extends Component {
//   //===========================================
//   // STAGE 2 CLASS PROPERTIES TEST
//   //===========================================
//   state = {
//     test: 'Class Properties Work'
//   };
//   //===========================================
//   // TESTING ASYNC FUNCTIONALITY
//   //===========================================
//   asyncFunc = () => {
//     console.log('object');
//     return Promise.resolve('Promises work');
//   };

//   async componentDidMount() {
//     this.setState({
//       test: await this.asyncFunc()
//     });
//   }

//   render() {
//     return <h1>HELLO REACT! {this.state.test}</h1>;
//   }
// }
