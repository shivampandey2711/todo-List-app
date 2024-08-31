const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/todoApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch(err => {
  console.log('Failed to connect to MongoDB', err);
});

// Define the Task model
const TaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, default: false },
});

const Task = mongoose.model('Task', TaskSchema);

// CRUD Routes
app.get('/api/tasks', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: 'Failed to retrieve tasks', error: err });
  }
});

app.post('/api/tasks', async (req, res) => {
  const { title } = req.body;

  try {
    const newTask = new Task({ title });
    const savedTask = await newTask.save();
    res.json(savedTask);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create task', error: err });
  }
});

app.put('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  const { title, completed } = req.body;

  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, completed },
      { new: true } // Return the updated task
    );
    res.json(updatedTask);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update task', error: err });
  }
});

app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;

  try {
    await Task.findByIdAndDelete(id);
    res.json({ message: 'Task deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete task', error: err });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
