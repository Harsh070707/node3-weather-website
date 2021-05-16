const request = require('request')


const geocode =(address,callback)=>{
const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1IjoiaGFyc2gwMDA3IiwiYSI6ImNrbzJudXNtZTBrNTIycGx5ejZ5cjYycDQifQ.j_NCf4oBisR7LDWbyT9StQ'
 request({url:url,json:true},(error,response)=>{
	
	if(error){
		console.log('the location not found',undefined)
	}
	else if(response.body.features.length === 0){
		console.log('The data not found',undefined)
	}
	else{
 callback(undefined,{
	longitude:response.body.features[0].center[0],
	latitude:response.body.features[0].center[1],
	location: response.body.features[0].place_name
	})
 
	}
})
 

}

module.exports=geocode

