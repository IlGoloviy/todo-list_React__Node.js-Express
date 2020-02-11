const express =  require('express');
const cors = require('cors');
// const path = require('path');
// const consolidate = require('consolidate');
const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.99.100:32768/todolist', {useUnifiedTopology: true, useNewUrlParser: true});

const Task = require('./models/tasks');

const app = express();

// app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  
  res.send(tasks);
});

// app.get('/task/:id', async (req, res) => {
//   const task = await Task.findById(req.params.id);

//   res.redirect('/tasks');
// });

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  const savedTask = await task.save();

  res.redirect('/tasks');
});

app.post('/complete', async (req, res) => {
  await Task.updateOne({_id: req.body.id}, { $set: { end: true } });
  
  const tasks = await Task.find();
  res.send(tasks);
});

app.post('/delete', async (req, res) => {
  await Task.deleteOne({_id: req.body.id});

  res.redirect('/tasks');
});



app.listen(8080, () => {
  console.log('Server has been started!');
}); 