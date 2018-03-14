var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var nav = [
            {Link:'/Books', Text:'Books'},{Link:'/Authors',Text:'Authors'}
        ];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
//app.use(express.static('src/views'));
app.set('views','./src/views');

// jade eg start
/*app.set('view engine','jade');
app.get('/', function(req,res){
    res.render('index');
});
*/
// jade eg end


// handlebar eg start
/*
var handlebars = require('express-handlebars');
app.engine('.hbs', handlebars({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.get('/', function(req,res){
    res.render('index',{title: 'Hello from render', list: ['a','d']});
});
*/
// handlebar eg end


// ejs start
app.set('view engine', 'ejs');
app.get('/', function(req,res){
    res.render('index',{
        title: 'Hello from render', 
        nav:[
            {Link:'/Books', Text:'Books'},{Link:'/Authors',Text:'Authors'}
            ]
    });
});
// ejs end




app.use('/Books',bookRouter);

/*
app.get('/Books', function(req,res){
    res.send('hello books');
});
*/

app.get('/Authors', function(req,res){
    res.send('hello authors');
});

app.listen(port, function(err){
    console.log('my running server on port' + port);
});