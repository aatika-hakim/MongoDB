const {MongoClient, Db}= require('mongodb');
const { getEnvironmentData } = require('worker_threads');
let url = "mongodb://localhost:27017";
let database = 'local';
let client = new MongoClient(url);


async function getData()
{
    let res = await client.connect();
    let db = res.db(database);
    let collection = db.collection('startup_log');
    let response = await collection.find({allocator:'tcmalloc'}).toArray();

    console.log(response);
}

getData();