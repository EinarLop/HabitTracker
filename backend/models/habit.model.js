const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const habitSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    numberOfDays: { type: Array, requierd: true },
    color: { type: String, requierd: true },
    state: { type: String, required: true }





});

const Habit = mongoose.model('Habit', habitSchema);

module.exports = Habit;