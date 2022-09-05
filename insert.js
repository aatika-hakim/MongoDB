const getData = require('./mongodb');

// insert data in mongodb

const insertData =  async () => {
    const data = await getData();
    const result = await data.insert(
        [
            { name:'Windows', Ram:'64 bit',performance:'good'}, 
        ]
    );
    
if(result.acknowledged){
    console.log("inserted")
}
console.log(result);
}
insertData();

