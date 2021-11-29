const mongoose = require('mongoose');

const cleanDatabase = async () => {
  await Promise.all(
    Object.keys(mongoose.connection.collections).map(async (collection) => {
      await mongoose.connection.collections[collection].deleteMany({});
    })
  );
};

module.exports = cleanDatabase;
