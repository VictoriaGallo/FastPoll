const mongoose = require('mongoose');

module.exports = (function () {
  const MONGO_URI = process.env.MONGODB_URI || 'mongodb+srv://lauragallo:GOgo3@cluster0.xpbud77.mongodb.net/fastpoll?retryWrites=true&w=majority';
  mongoose.connect(MONGO_URI)
    .then(() => {
      console.log('Connected to MongoDB');
    })
    .catch((err) => {
      console.error('Connection error to MongoDB - \n' + err);
    });
})();
