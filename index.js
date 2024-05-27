//jshint esversion:6

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine','ejs');

app.get('/',(req,res)=>{
	res.render('index');
});
app.get('/arte_ambiental',(req,res)=>{
	res.render('arte_ambiental')
})
app.get('/educacion_ambiental',(req,res)=>{
	res.render('educacion_ambiental')
})
app.get('/talleres_sustentables',(req,res)=>{
	res.render('talleres_sustentables')
})
app.get('/participacion_ciudadana',(req,res)=>{
	res.render('participacion')
})
app.listen(port,()=>{
	console.log('Server started succesfully')
});
