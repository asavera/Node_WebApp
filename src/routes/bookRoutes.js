var express  = require('express');

var bookRouter = express.Router();

var router = function(navOptions){

    var books = [
    {
        title: 'War and Peace',
        author: 'Lev Nikolayevich'
    },
    {
        title: 'Gems',
        author: 'Rumi'
    }
];

bookRouter.route('/')
    .get(function(req,res){
    //res.send('Hello Books from router');
    res.render('booksListView',{
        title: 'Books', 
        nav: navOptions,
        books: books
    }); 
            
});

bookRouter.route('/:id')
    .get(function(req,res){
    var id = req.params.id;
    res.render('bookView',{
        title: 'Book Detail', 
        nav: navOptions,
        book: books[id]
    }); 
});

    return bookRouter;
};



//module.exports = bookRouter;
module.exports = router; // return function that returns the bookRouter