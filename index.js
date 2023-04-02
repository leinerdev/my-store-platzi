const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler')

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send(`
    Esta es una API desarrollada en Nodejs con Express, si quieres ver los productos navega a la ruta: /api/v1/products.
    Toda la documentación la encuentras en: "https://documenter.getpostman.com/view/20530102/2s93RWMq17"
  `);
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, soy una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Mi puerto ${port}`);
});
