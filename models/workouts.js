const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    type: String,
    name: String,
    distance: Number,
    duration: Number,
    weight: Number,
    set: Number,
    reps: Number
})
const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;