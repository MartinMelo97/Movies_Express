const mongoose = require('mongoose')
const Schema = mongoose.Schema

const movieSchema = new Schema({
  title: {
    type: String,
    required: "Este campo es requerido"
  },
  img: {
    type: String,
    required: "Este campo es requerido"
  },
  description: {
    type: String
  },
  duration: {
    type: Number
  },
}, {
  timestamps: {
    createdAt: "created_at",
    updatedAt: "updated_at"
  }
})

module.exports = mongoose.model("Movie", movieSchema)