const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
app.use('/', express.static(path.resolve('./')))

app.use(bodyParser.json()); 

const lessons = require('./src/assets/data/channel.json')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/src/index.html'))
    console.log('get')
});


app.get('/api/lessons', function (req, res) {
    console.log('Get Lessons')
    res.send(lessons);
});

app.use(function(req, res, next) {
    let err = new Error('Not Found');
    err.status = 404;
    next(err);
});

app.listen(3000, function () {
    console.log('Example listening on port 3000!');
});
module.exports = app;




