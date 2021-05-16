const request = require('request')

const forecast=(latitude,longitude,callback)=>{
   const url='http://api.weatherstack.com/current?access_key=b885c91c47e450c0b333b75915f0dad3&query=' + latitude + ',' + longitude + '&units=m'
   request({url: url,json: true}, (error,response)=>{
	   
	   	if(error){
	callback('the location not found',undefined)
	}
	else if(response.body.error){
		callback('The data not found',undefined)
	}
	else{
 callback(undefined,
	 
	 	 //const currtemp = response.body.current.temperature
  //const feelike =response.body.current.feelslike
	response.body.current.weather_descriptions[0]+ ', it is currently '+ response.body.current.temperature +' out. It feels like '+ response.body.current.feelslike + ' degrees out'
	)
 
	}
   })

}

module.exports = forecast