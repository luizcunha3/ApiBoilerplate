//Libs
const express = require('express')
const config = require('config')
const swaggerUi = require('swagger-ui-express')

//Files
const testRoutes = require('./routes/test')
const swaggerDocument = require('./swagger.json');

const app = express()
const port = config.get('environment.port')

app.use('/test', testRoutes)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})