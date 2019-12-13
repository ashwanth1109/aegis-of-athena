//===========================================
// import dependencies
//===========================================
import express from 'express';
import config from './config';
import serverRender from './renderers/server';
import { data } from './testData';

//===========================================
// bring in application
//===========================================
const app = express();

//===========================================
// have express statically serve up the public directory
//===========================================
app.use(express.static('public'));

//===========================================
// create index route at /
//===========================================
app.get('/', async (req, res) => {
  const { initialMarkup, initialData } = await serverRender();
  res.render('index', {
    initialMarkup: initialMarkup,
    initialData: JSON.stringify(initialData)
  });
});

//===========================================
// Expose our test data using /data api route
//===========================================
app.get('/data', (req, res) => {
  res.send(data);
});

//===========================================
// configure express to use ejs as the templating language
//===========================================
app.set('view engine', 'ejs');

//===========================================
// set up the app to listen on config.port
//===========================================
app.listen(config.port, () =>
  console.info(`Listening on PORT ${config.port}. . .`)
);
