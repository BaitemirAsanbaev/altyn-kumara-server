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
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
});

module.exports = model("Dish", DishSchema);
