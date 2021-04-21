const request=require('request');

const forecast=(lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=2d570e039351eae93d9d0df25e7a11be&query='+lat+','+long;
    request({ url,json:true },(error,{body})=>{
        //console.log(response.body.current)
        //console.log(response.body.current.weather_descriptions[0]+'. It is '+response.body.current.temperature+' degrees. It feels like '+response.body.current.feelslike+" degrees")
        if(error){
            callback('Unable to connect to web service',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
            //console.log(response.body.current.weather_descriptions[0]+'. It is '+response.body.current.temperature+' degrees. It feels like '+response.body.current.feelslike+" degrees")
            callback(undefined,body.current.weather_descriptions[0]+'. It is '+body.current.temperature+' degrees. It feels like '+body.current.feelslike+" degrees")
        }
        
    })
}

module.exports=forecast;