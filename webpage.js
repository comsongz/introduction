const nunjucks=require('nunjucks');

nunjucks.configure('views',{
    express:app,
    watch:true,
});