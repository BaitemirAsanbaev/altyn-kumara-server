const { validationResult } = require("express-validator");
const ApiErrors = require("../exceptions/api-errors");
const DishService = require("../service/dish-service");
const { ObjectId } = require("mongodb");
class DishController {
  async getAllDishes(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ApiErrors("validation error", errors.array()));
      }
      const dishData = await DishService.getAllDishes();
      return res.json(dishData);
    } catch (e) {
      next(e);
    }
  }
  async getDish(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ApiErrors("Validation error", errors.array()));
      }
      const id = req.params.id;

      if (!ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid ID format" });
      }
      const dishData = await DishService.getDish(id);

      if (!dishData) {
        return res.status(404).json({ message: "Dish not found" });
      }
      return res.json(dishData);
    } catch (e) {
      next(e);
    }
  }
  async createDishes(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ApiErrors("validation error", errors.array()));
      }
      const { title, description, category } = req.body;
      // const {image} = req.files;
      await DishService.createDish({ title, description, category });
      return res.status(200).json({ message: "Dish created successfully" });
    } catch (e) {
      next(e);
    }
  }
  async updateDish(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ApiErrors("validation error", errors.array()));
      }
      const { id } = req.params;
      const { title, description, category } = req.body;
      // const {image} = req.files;
      console.log(id, { title, description, category });
      await DishService.updateDish(id, { title, description, category });
      res.status(200).json({ message: "Dish updated successfully" });
    } catch (e) {
      next(e);
    }
  }
  async deleteDish(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(new ApiErrors("validation error", errors.array()));
      }
      const { id } = req.params;
      await DishService.deleteDish(id);
      return res.status(200).json({ message: "Dish deleted successfully" });
    } catch (e) {
      next(e);
    }
  }
}

module.exports = new DishController();
