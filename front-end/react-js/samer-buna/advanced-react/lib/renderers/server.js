import React from 'react';
import ReactDOMServer from 'react-dom/server'; // This lets you render a React application into a string

import StateApi from 'state-api';
import axios from 'axios'; // we use axios for server side as well

import App from '../components/App';
import { port, host } from 'config';

const serverRender = async () => {
  const res = await axios.get(`http://${host}:${port}/data`);
  const store = new StateApi(res.data);

  return {
    initialMarkup: ReactDOMServer.renderToString(<App store={store} />),
    initialData: res.data
  };
};

export default serverRender;
