const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
// app.use(express.static(__dirname+'/public'));
app.use('/', express.static(path.resolve('./')))

app.use(bodyParser.json()); 

const lessons = require('./channel.json')

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname,'/src/index.html'))
    console.log('get')
});
// app.get('*', function (req, res) {
//     res.sendFile(__dirname + '/index.html'); // load the single view file (angular will handle the page changes on the front-end)
// });



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









// const fs = require('fs');
// const http = require('http');
// const router = express.Router();
// const title = require('./channel.json')

// const app = express();

// const posts = require();

// app.listen(4200, (req, res) => {
//   console.log('Yeeeeay its running')
// })

// router.get('./', (req, res, next)=>{
//  const data = title
//  console.log(data)
// })

// app.use(express.static('channel.json'))
// app.post('./notes', (req, res)=>{
//   res.send('hello')
// })

// var fs = require('fs');
// var title = require('./channel.json')


// console.log(title)

// const content = fs.readFileSync('channel.json', 'utf-8');
// var content = require('channel.json', 'utf-8');

// console.log(content)

// const fs = require('fs');

// let rawdata = fs.readFileSync('channel.json');  
// let student = JSON.parse(rawdata);  
// console.log(student); 



