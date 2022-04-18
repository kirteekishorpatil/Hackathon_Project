const bodyParser = require('body-parser');
const express=require('express')
const router=require('./router/router')
const port=7000;
const app=express()
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/',router)
app.listen(port,()=>{
    console.log(`server starts at port no ${port}`)
})

