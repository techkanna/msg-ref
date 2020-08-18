const mongoose = require('mongoose');

exports.connectDB = async () => {
  let MongoURL;
  if (process.env.NODE_ENV === 'Development') {
    MongoURL = 'mongodb://localhost:27017/messages';
  } else {
    MongoURL = process.env.MongoURI;
  }

  try {
    const conn = await mongoose.connect(MongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log(`db connected on ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
