const knex=require('../module/connection')

const post_data=(req,res)=>{
    const resigstetion={
       First_Name:req.body.First_Name,
       Last_Name:req.body.Last_Name,
       Address:req.body.Address,
       Password:req.body.Password,
       Conform_Password:req.body.Conform_Password,
       Phone_No:req.body.Phone_No,
       E_mail:req.body.E_mail,
       Age:req.body.Age

    }
    knex("sumit_from").insert(resigstetion).then(()=>{
        res.send({message:"data post successfully"})
        console.log("Data inserted")
    }).catch((err)=>{
        res.send({message:err})
        console.log("Data does not inserted")
        })
}
module.exports={post_data}
