// const express = require('express')
// const getData = require('./mongodb')
// const mongodb = require('mongodb')
// const app = express()
// app.use(express.json())

// app.get('/', async (req, resp) => {
//   let data = await getData()
//   data = await data.find().toArray()
//   console.log(data)
//   resp.send(data)
// })

// app.post('/', async (req, resp) => {
//   let data = await getData()
//   data = await data.insert(req.body)
//   resp.send(data)
// })

// app.put('/:name', async (req, resp) => {
//   let data = await getData()
//   data = await data.updateOne({ name: req.params.name }, { $set: req.body })
//   resp.send('data updated')
// })

// app.delete('/:id', async (req, resp) => {
//   let data = await getData()
//   data = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) })
//   resp.send(data)
// })

// app.listen(5000)
