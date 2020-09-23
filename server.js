require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');


let app = express();

app.use(cors());
app.set('port',process.env.PORT||3000)

app.use(bodyParser.json());
const router = require('./network/router');
router(app);
app.listen(app.get('port'), ()=>{
console.log('La aplicacion este ejecutandose en el puerto http://localhost:3000');
});