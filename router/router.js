const express=require('express')
const { post_data } = require('../controller/logic')


const router=express.Router()
router.post('/post_data',post_data)





module.exports=router