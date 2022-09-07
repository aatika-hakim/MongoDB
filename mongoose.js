const mongoose = require('mongoose')

const main = async () => {
  await mongoose.connect('mongodb://localhost:27017')

  const dataSchema = new mongoose.Schema({
    name: String,
  })

  const dataModel = mongoose.model('users', dataSchema)
  let data = new dataModel({ name: 'Levis' })
  let res = await data.save()
  console.log(res)
}
main();