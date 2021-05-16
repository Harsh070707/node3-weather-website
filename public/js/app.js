// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
// 	response.json().then((data)=>{
// 		console.log(data)
// 	})
// })

// fetch('http://localhost:3000/weather?address=australia').then((response)=>{
// 	response.json().then((data)=>{
//          console.log(data.location)
//          console.log(data.forecast)
// 	})
// })

const weatherform=document.querySelector('form')
const search=document.querySelector('input')
const msg1=document.querySelector('#msg1')
const msg2=document.querySelector('#msg2')


weatherform.addEventListener('submit',(e)=>{
	e.preventDefault()

	const location=search.value
    
    	msg1.textContent='Loading...'


	fetch('http://localhost:3000/weather?address='+location).then((response)=>{
	response.json().then((data)=>{

		msg1.textContent=data.location
		msg2.textContent=data.forecast
         //console.log(data.location)
         //console.log(data.forecast)
	})
})

})