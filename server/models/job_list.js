var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var job_schema = new Schema({
    external_reference_id: {
        type: String,
        unique: true
    },
    robot_url: String,
    priority: {
        type: String,
        default: "0"
    }, 
    task_list: [], //degisebilir?
    job_status: String,
    last_complated_task: {
        action_name: String,
        location_id: String
    }, //degisebilir?
    error_code: String,
    error_message: String
}, {collection: 'job_list', versionKey: false, timestamps: true});

var Jobs = mongoose.model('Jobs', job_schema);


module.exports = Jobs;