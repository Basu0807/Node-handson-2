const express =require("express")


const port = 4000
const app = express()

app.get('/api/main',(req,res)=>{
res.send({
    "What is express": "Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes.",
    "Why Express JS?":{
        "1":"Express was created to make APIs and web applications with ease,",
        "2":"It saves a lot of coding time almost by half and still makes web",
        "3":"mobile applications are efficient.",
        "4":"Another reason for using express is that it is written in javascript as javascript is an easy language even if you don't have a previous",
        "5":"knowledge of any language. Express lets so many new developers enter the field of web development."

    },
    "Features of Express JS":{
        "1":"Fast Server-Side Development ",
        "2":"Middleware",
        "3":"Routing",
        "4":"Templating",
        "5":"Debugging"
    }
})
})
app.get('/',(req,res)=>{
    res.send("Welcome to the Prepbytes- USE ROUTE- /api/main to read the data")
})


app.listen(port,()=>{
    try{
        console.log(`Server is running at port no. ${port}`);

    }
    catch(err){
        console.log(`This is the error ${err}`);

    }
})