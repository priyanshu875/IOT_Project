const express=require('express');
const app=express();
const path=require('path');
const mongoose=require('mongoose');
const db_link="mongodb+srv://khaplejay00:dustbin_of_bh4a809@cluster0.a9zocip.mongodb.net/?retryWrites=true&w=majority";
let db=mongoose.connect(db_link)
.then((data)=>{
    console.log("db connected");
})
.catch((err)=>{
    console.log(err);
})

const bin_model=mongoose.model("binModel",mongoose.Schema({
    name:{
        type:String,
        unique:true
    },
    status:{
        type:String
    }
}))

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')

})
app.get('/getData',async (req,res)=>{
    let data=await bin_model.find({})//db 
    console.log(data);
    res.json({
        status:true,
        result:data
    })
})


app.listen(5000,()=>{
    console.log("server started at 5000");
})