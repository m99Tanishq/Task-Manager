const mongoose = require('mongoose');



const TaskSchema = new mongoose.Schema({
    name:{
        type: String,
        required:[true, 'must provide a name'],
        trime:true,
        maxlength:[20, 'name cam mot be more than 20 characters']
    },
    completed:{
        type: Boolean,
        deafult: false
    }
})

module.exports = mongoose.model('Task', TaskSchema)