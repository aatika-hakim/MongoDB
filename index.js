 const getData = require('./mongodb');

// read data from mongodb
/*
    getData().then((response)=>{
    response.find({}).toArray().then((data)=>{
    console.log(data);
    });
}) */

 let main = async () => {
     let data = await getData();
     data = await data.find().toArray();
     console.log(data);
 }
 main();

