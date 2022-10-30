const Task = require('../models/Task')
module.exports.getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task });
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports.getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })

        if (!task) {
            return res.status(404).json({ msg: `No task with the id: ${taskID} found !` })
        }

        res.status(200).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}


module.exports.deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `No task with the id: ${taskID} found !` })
        }
        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

module.exports.updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params

        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators: true
        })
        if (!task) {
            return res.status(404).json({ msg: `No task with the id: ${taskID} found !` })
        }

        res.status(200).json({ task })

    } catch (error) {
        res.status(500).json({ msg: error })
    }
}