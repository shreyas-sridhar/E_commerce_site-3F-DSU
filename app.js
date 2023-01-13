 const { json } = require("express");
const express = require("express");
const path=require("path");
const app = express();
require("./db/conn");
const Register=require("./models/registers"); 

const port=process.env.PORT || 3000;

const static_path = path.join(__dirname,"../public");

app.use(express.json());
app.use(express.urlencoded({extended:false})); 

//console.log(path.join(__dirname,"../public"));
app.use(express.static(static_path));
 
app.get('/',(req,res)=>{
    res.send("Hello world");
}); 

app.get('/register',(req,res)=>{
    res.send("registers"); 
})

//create a new user in our database
app.post('/registers', async (req,res)=>{
    try {
        const password=req.body.password;
        const cpassword=req.body.confirmpassword;

        if(password === cpassword){

            const regis=new Register({
                 
                email:req.body.email,
                password:password,
                confirmpassword:cpassword
            })
        
            const registered=await regis.save();
            res.status(201).get("./public/index");

        }else{
            res.send("passwords are not matching")
        }

    } catch (error) {
        res.status(400).send(error);
    }
})

app.listen(port,() => {
    console.log(`server is running on port number: ${port}`);
})