const getData = require('./mongodb');

// insert data in mongodb

const insert =  async () => {
    const data = await getData();
    const result = await data.insert(
        [
       { name:'Windows', Ram:'64 bit'},
        ]
    );

if(result.acknowledged){
    console.log("inserted")
}
console.log(result);
}
insert();

