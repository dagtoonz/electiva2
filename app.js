const express = require('express');
const {Router} = require('express');

const app = express();

app.use(express.json());

app.use('/api/v1', require('./routers/postRouter'));

app.listen(3000, ()=> {

    console.log('Server Runing');
});