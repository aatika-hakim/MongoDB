const mongoose = require('mongoose');
const express = require('express')
mongoose.connect('mongodb://localhost:27017/test')

const app = express()
app.use(express.json())

//   Schema
const dataSchema = new mongoose.Schema({
  name: String,
  // username: String,
  // email: String
})

// Model
const dataModel = mongoose.model('users', dataSchema);

app.post('/', async (req, res) => {
  let data = new dataModel(req.body)
  let result = await data.save()
  console.log(result)
  res.send(result)
});

app.get('/list', async (request, res) => {
  let data = await users.find();
  res.send(data)
});

app.search('/search/:key', async (req, res) => {
  let data = new dataModel(req.params.key)
  let result = await data.find({
    "$or":
      {"name": {$regex:req.params.key}}
  })
  console.log(result)
  res.send(result)
});

app.listen(5000);