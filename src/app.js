const express = require('express')
const path=require('path')
const hbs=require('hbs')
const geocode= require('./utils/weather-get')
const forecast= require('./utils/forecast')

const app = express()
const pathget=path.join(__dirname,'../public')
const viewspath=path.join(__dirname,'../templates/views')
const partialpath=path.join(__dirname,'../templates/partials')

app.set('view engine','hbs')
app.set('views',viewspath)
hbs.registerPartials(partialpath)

app.use(express.static(pathget))

app.get('',(req,res)=>{
	
	res.render('index',{
		
		title:'weather',
		name:'Harsh Bansal'
	})
})

app.get('/about',(req,res)=>{
	
	 res.render('about',{
	 title:'About me',
	 name:'Harsh Bansal'
	 })
})

app.get('/help',(req,res)=>{
	res.render('help',{
		title:'Help',
		name:'Get the help from here'
	})
})

app.get('/weather',(req,res)=>{
	if(!req.query.address){
		return res.send({
			error:'You must provide an address'
		})
	}
	
	
geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({error})
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({error})
            }

          res.send({

          	forecast:forecastData,
          	location,
          	address:req.query.address
          })
        })
    })
})

app.get('/products',(req,res)=>{
	if(!req.query.search){
		return res.send({
			error:'You must provide search term'
		})
	}
	
	console.log(req.query.search)
	res.send({
		product:[]
	})
})

app.get('/help/*',(req,res)=>{
	res.render('404',{
		title:'404',
		name:'Harsh Bansal',
		errormessage:'help article not found'
	})
})

app.get('*',(req,res)=>{
	res.render('404',{
		title:'404',
		name:'Harsh Bansal',
		errormessage:'Page not found'
	})
})

app.listen(3000,()=>{
	
	console.log('server is up')
})
