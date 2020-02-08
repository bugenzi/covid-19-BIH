const request=require('request');

const url='https://api.chucknorris.io/jokes/random';

request({url,json:true},(error,response)=>{
        
let jokes={
    joke:response.body.value
}



 

})