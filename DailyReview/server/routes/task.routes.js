const TaskController = require('../controllers/task.controller');

module.exports = function(app){
    app.get('/api/tasks', TaskController.showAll);
    app.post('/api/tasks/new', TaskController.createNew);
    app.delete('/api/task/:id', TaskController.deleteTask)
}