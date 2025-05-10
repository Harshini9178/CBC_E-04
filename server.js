const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Pathwise Backend Running!');
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
const mongoose = require('mongoose');



// Correct connection string format
mongoose.connect('mongodb+srv://username:password@cluster0.mongodb.net/pathwise?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Connection error:', err));
