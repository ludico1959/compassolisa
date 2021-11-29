const mongoose = require('mongoose');
require('dotenv').config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

class Database {
  constructor() {
    this.connect();
  }

  connect() {
    mongoose.connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
  }
}

module.exports = new Database().connect();
