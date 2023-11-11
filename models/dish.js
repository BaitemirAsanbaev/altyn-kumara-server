const { Schema, model } = require("mongoose");
const DishSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
});

module.exports = model("Dish", DishSchema);
