let mongoose = require('mongoose');

module.exports = (() => {
  mongoose.connect( process.env.DB_CONNECTION,{
      useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(()=> console.log('db connected.'))
    .catch((e)=> console.log(`db error is: ${e}`))
})();