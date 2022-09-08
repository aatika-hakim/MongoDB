const getData = require('./mongodb');

// update data in mongodb

const update =  async () => {
    const data = await getData();
    const result = await data.updateOne(
        
       { name:'Windows'},{
        $set: {name: 'linux'}
       }
    );

console.log(result);
}
update();

