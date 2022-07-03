//create express app
const { request } = require('express')  
const exp = require('express');//importing a function express
const app = exp();//object created for exp as app
mclient=require("mongodb").MongoClient;

//import dotenv
require('dotenv').config()

//import path module 
const path=require('path');

//connect build of react with nodejs
app.use(exp.static(path.join(__dirname,'./build')));



//DB connection URL
const DBurl=process.env.DATABASE_CONNECTION_URL;

//connect with mongoDB server
mclient.connect(DBurl)
.then((client)=>{

  //get DB object
  let dbObj=client.db("20071A05M6db");

  //create collection objects
  let userCollectionObject =dbObj.collection("userCollection")
    let productCollectionObject =dbObj.collection("productCollection")

  //sharing collection objects to APIs
  app.set("userCollectionObject",userCollectionObject);
    app.set("productCollectionObject",productCollectionObject);

  console.log("DB connection success")
})
//if condition is not satisfied
.catch(err=>console.log('Error in DB connection ',err))


//import userApp and productApp
const userApp=require('./APIS/userApi')
const productApp=require('./APIS/productApi')

//execute specific api based on path
app.use('/user-api',userApp);
app.use('/product-api',productApp);

//dealing with page refresh
//if it doesnot set to above apis then it will send file of current directory
app.use('*',(request,response)=>{
    response.sendFile(path.join(__dirname,'./build/index.html'))
})

//handling invalid paths
app.use((request, response, next) => {
  response.send({ message: `path ${request.url} is invalid` });
});

//error handling middleware(only synchronous errors are taken care)
app.use((error, request, response, next) => {
  response.send({ message: "Error occurred", reason: `${error.message}` });
});

//assign port number
const port=process.env.PORT;
app.listen(port,()=>console.log(`server listening on port ${port}...`))