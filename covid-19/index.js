const path=require('path')
const express=require('express')
const request=require('request');
const url='https://api.covid19api.com/live/country/bosnia%20and%20herzegovina/status/confirmed/date/2020-03-21T13:13:30Z'

const app=express()
const port=process.env.PORT || 3000
app.use(express.static(path.join(__dirname ,"public")))
app.use(express.static('src'))


app.get('/stats',(req,res)=>{ 
    request(url,{json:true,},(err,respond)=>{
        let confirmed =respond.body[5].Confirmed
        let deaths= respond.body[5].Deaths
        let recoverd=respond.body[5].Recovered
        let active=respond.body[5].Active
     res.send(
        {
            confirmed,
            deaths,
            recoverd,
            active
        }
     )
        
    })
    
})

app.listen(port,()=>{
    console.log(`Server is up on port${port}`)
})