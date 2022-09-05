const {MongoClient, Db}= require('mongodb');
let url = "mongodb://localhost:27017";
let database = 'local';
let client = new MongoClient(url);


async function getData()
{
    let res = await client.connect();
    let db = res.db(database);
    return db.collection('startup_log');
}
// curd operations

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

