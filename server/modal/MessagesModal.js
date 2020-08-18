const mongoose = require('mongoose');

const stringRequired = {
  type: String,
  require: true
};

const messagesShema = new mongoose.Schema({
  name: stringRequired,
  message: stringRequired,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = MESSAGE = mongoose.model('messages', messagesShema);
