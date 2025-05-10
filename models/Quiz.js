const mongoose = require('mongoose');

const QuizSchema = new mongoose.Schema({
  title: String,
  questions: [{
    questionText: String,
    options: [String],
    correctAnswer: Number
  }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Quiz', QuizSchema);