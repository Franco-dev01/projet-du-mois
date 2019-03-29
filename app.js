var http = require ('http')
require('babel-register')
var  express = require('express');
var app =  express()
var path = require('path')
var mysql = require('mysql')
var morgan = require('morgan')
//var config = require('./config')
var ejs = require('ejs')
var serveur =http.createServer('http')
var port =4000
//var bodyParser = require('body-parser')

var bd = mysql.createConnection({

    host     : 'localhost',
    user     :  'root',
    password : '',
    database :  'nodejs'
})

bd.connect((error)=>{
    if(!error)
    console.log('successful')
    else
    console.log(error.message)
})

//creation de route

app.get('/',(req,res)=>{
    let name="oracle le code source"
    let age=999

    res.status(200).render('',{
        nomNom:name,
        monAge:age
    })
})


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'view'));
app.use(express.static(__dirname+ '/public'));
/*app.use(bodyparser())
app.use(bodyParser.urlencoded({extended:true}))
app.use(core())*/

    /*app.listen(port,()=>{
        console.log(`le server est lance sur le port $[port]`)
        console.log('le server est lance sur le port '+$[port])
    })*/
//appelle de toute les


app.get('/wel',(req,res)=>{
    res.render('wel')
    
})
app.get('/index',(req,res)=>{
    res.render('index') 
})
app.get('/menu',(req,res)=>{
    res.render('menu')
} )
app.get('/connexion',(req,res)=>{
    res.render('connexion')
})
app.get('/inscription',(req,res)=>{
    res.render('inscription')
})
app.post('/inscription',(req,res)=>{
    
})
app.listen(4000, ()=> {console.log('started on port 4000')
})