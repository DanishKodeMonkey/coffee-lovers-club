const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
    author: { type: Schema.Types.ObjectId, ref: 'Users', required: true },
    title: { type: String, required: true, maxLength: 50 },
    message: { type: String, required: true, maxLength: 600 },
    timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Messages', MessagesSchema);
