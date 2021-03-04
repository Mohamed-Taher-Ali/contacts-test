const mongoose = require('mongoose'),
      schema = mongoose.Schema;

const contactSchema = new schema(
  {
    name: {
      type: String,
      unique: true,
      required: true,
      min: 2,
      max: 50
    },
    phone: {
      type: String,
      unique: true,
      required: true,
      min: 8,
      max: 50
    },
    email: {
      type: String,
      unique: true,
      required: true,
      min: 8,
      max: 50
    },
  },
  {
    timestamps: true
  }
);

const Contact = mongoose.model('Contact', contactSchema);

module.exports = {
  contactSchema,
  Contact
}