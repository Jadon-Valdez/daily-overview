const mongoose = require('mongoose');
const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required:[true, "Task is required"],
        minlength : [3, "Task must be at least 3 characters!"]
    }
}, { timestamps: true });
module.exports.Task = mongoose.model('Task', TaskSchema);