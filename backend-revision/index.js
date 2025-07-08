const express = require('express');
const app = express();

app.use(express.json());

let users=[];

app.get("/", (req,res) => 
    res.json({message : "Welcome back to Development"})
);


app.get("/users", (req,res)=>{
   


res.json(users);

});

app.post("/login", (req,res)=>{

    const {email, password} = req.body;

    const user = {email,password};
    users.push(user);

    console.log("Login attempted", email,password);
    res.json({message:"Login data has been received"});

});



app.listen(3000,() => console.log("Server is running on port 3000"));