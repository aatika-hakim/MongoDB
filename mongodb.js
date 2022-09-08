module.exports = getData;

const {MongoClient}= require('mongodb');
let url = "mongodb://localhost:27017";
let database = 'data';
let client = new MongoClient(url);


async function getData()
{
    let res = await client.connect();
    let db = res.db(database);
    return db.collection('users');
}