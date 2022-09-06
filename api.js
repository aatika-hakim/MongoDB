const express = require('express');
const getData = require('./mongodb');
const app = express();


app.get('',async (req,resp)=>{
    let data = await getData();
    data = await data.find().toArray();
    console.log(data);
});

app.listen(5000);
