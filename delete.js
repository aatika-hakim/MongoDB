const getData = require('./mongodb');

// update data in mongodb

const deleteData =  async () => {
    const data = await getData();
    const result = await data.deleteOne({ name:'Windows'});

    if(result.acknowledged){
        console.warn("data deleted");
    }
console.log(result);
}
deleteData();

