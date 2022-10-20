const { Task } = require('../models/task.model');

module.exports.createNew = (req, res) => {
    const { name } = req.body;
    Task.create({
        name
    })
        .then(newTask => res.json({ task: newTask }))
        .catch(err => {
            console.log(err)
            res.status(400).json(err)
        })
};

module.exports.showAll = (req, res) => {
    Task.find()
        .then(allTasks => res.json({ tasks: allTasks }))
        .catch(err => res.json({ message: "something went wrong", error: err }))
};

module.exports.deleteTask = (req, res) => {
    const { id } = req.params
    Task.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}
// module.exports.showOne = (req, res) => {
//     const { id } = req.params
//     Pet.find({ _id: req.params.id })
//         .then(pet => res.json(pet))
//         .catch(err => res.json(err))
// }

// module.exports.updatePet = (req, res) => {
//     Pet.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//         .then(updatedPet => res.json(updatedPet))
//         .catch(err => res.json(err))
// }
