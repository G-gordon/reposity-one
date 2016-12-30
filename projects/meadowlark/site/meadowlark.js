var express = require('express');
var app = express();
var handlebars = require('express3-handlebars')
        .create({ defaultLayout:'main'});
app.set('port',process.env.PORT || 3000);
//creating view engine
app.engine('handlebars',handlebars.engine);
app.set('view engine','handlebars');
//get添加路由1
app.get('/',function(req,res){
    res.type('text/plain');
    res.send('Meadowlark travel');
});
app.get('/home',function(req,res){
    res.type('text/plain');
    res.send('hello world');
})
//定制404页面
//.use 用于加载处理http的middleware
app.use(function(req,res,next){
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});
//定制500页面
app.use(function(err,req,res,next){
    console.log(err.stack);
    res.status(505);
    res.type('text/plain');
    res.send('500 - Server Error');
})

app.listen(app.get('port'),function(){
    console.log('Express strated on http://localhost:'+ app.get('port')+ '; press '+
    'ctrl-c to treminal.');
})