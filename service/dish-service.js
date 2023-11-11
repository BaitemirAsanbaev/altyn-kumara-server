const DishModel = require("../models/dish");
class DishService {
  async getAllDishes() {
    return DishModel.find();
  }
  async getDish(id) {
    return DishModel.findById(id);
  }
  async createDish(post) {
    return DishModel.create(post);
  }
  async updateDish(id, post) {
    return DishModel.findByIdAndUpdate(id, post, { new: true });
  }
  async deleteDish(id) {
    return DishModel.findByIdAndDelete(id);
  }
}

module.exports = new DishService();
