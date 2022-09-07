const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017')

//   Schema
const dataSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
})
//   Model
const saveData = async () => {
  const dataModel = mongoose.model('users', dataSchema)
  let data = new dataModel({
    name: 'Lebsack',
    username: 'Karianne',
    email: 'Julianne.OConner@kory.org',
  })
  let res = await data.save()
  console.log(res)
}
// saveData()

const updateData = async () => {
  const dataModel = mongoose.model('users', dataSchema)
  let data = await dataModel.updateOne(
    { name: 'Lebsack' },
    {
      $set: { username: 'fragria' },
    },
  )
  console.log(data)
}
updateData()
