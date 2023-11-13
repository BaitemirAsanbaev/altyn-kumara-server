const DishModel = require("../models/dish");
class DishService {
  async getAllDishes() {
    return DishModel.find();
  }
  async getDish(id) {
    return DishModel.findById(id);
  }
  async createDish(obj) {
    return DishModel.create(obj);
  }
  async updateDish(id, obj) {
    return DishModel.findByIdAndUpdate(id, obj, { new: true });
  }
  async deleteDish(id) {
    return DishModel.findByIdAndDelete(id);
  }
}

module.exports = new DishService();
