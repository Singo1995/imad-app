var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
var articles = {
    'article-one': {
        title: 'Article One | Surender Singh',
        heading: 'Article One',
        date: "July 12th 2017",
        content:
                `<p>
                        This is Singo!!!!.I am the Actor of Ennai Nokki Paayum Thotta.The stills which I have posed in this Movie is going viral and Hopefully the first day collection would be above 100 crore
                        </p>
                        <p>
                        This is Singo!!!!.I am the Actor of Ennai Nokki Paayum Thotta.The stills which I have posed in this Movie is going viral and Hopefully the first day collection would be above 100 crore
                        </p>
                        <p>
                        This is Singo!!!!.I am the Actor of Ennai Nokki Paayum Thotta.The stills which I have posed in this Movie is going viral and Hopefully the first day collection would be above 100 crore
                        </p>`
},
    'article-two':  {
        title: "Article Two | Surender Singh",
        heading: "Article Two",
        date: "July 12th 2017",
        content:
                `<p>
                This is Singo!!!!.
                </p>`
        
    },
    'article-three': {
        title: "Article Three | Surender Singh",
        heading: "Article Three",
        date: "July 12th 2017",
        content:
                `<p>
                        This is Third Article!!!!.
                        </p>`
         
     }
};
function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    var date = data.date;
    var content = data.content;
    var htmlTemplate =
`<html>
    <head>
        <title> 
        ${title} 
        </title>
        <meta name="viewport" content="width=device-width,initial-scale=1"/>
        <link href="/ui/style.css" rel="stylesheet" />
         </head>
        <body>
            <div class="container">
                <div>
                    <a href ='/'>Home</a>
                </div>
                <hr/>
                <h3>
                    ${heading} 
                </h3>
                <div>
                    ${date} 
                </div>
                <div>
                    ${content} 
                </div>
            </div>
        </body>
   </html>`;
   return htmlTemplate;
}
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});
app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});
app.get('/favicon.ico', function (req, res) {
res.sendFile(path.join(__dirnam, 'ui','favicon.ico'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
