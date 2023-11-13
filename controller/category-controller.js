const { validationResult } = require("express-validator");
const ApiErrors = require("../exceptions/api-errors");
const CategoryService = require("../service/category-service");
const { ObjectId } = require("mongodb");
class CategoryController{
    async getAllCategories(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()));
            }
            const dishData = await CategoryService.getAllCategories();
            return res.json(dishData);
        } catch (e) {
            next(e);
        }
    }
    async getCategory(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(new ApiErrors("Validation error", errors.array()));
            }
            const id = req.params.id;

            if (!ObjectId.isValid(id)) {
                return res.status(400).json({ message: "Invalid ID format" });
            }
            const dishData = await CategoryService.getCategory(id);

            if (!dishData) {
                return res.status(404).json({ message: "Dish not found" });
            }
            return res.json(dishData);
        } catch (e) {
            next(e);
        }
    }
    async createCategory(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()));
            }
            const { title} = req.body;
            await CategoryService.createCategory({ title});
            return res.status(200).json({ message: "Dish created successfully" });
        } catch (e) {
            next(e);
        }
    }
    async updateCategory(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()));
            }
            const { id } = req.params;
            const { title } = req.body;
            console.log(id, { title});
            await CategoryService.updateCategory(id, { title});
            res.status(200).json({ message: "Dish updated successfully" });
        } catch (e) {
            next(e);
        }
    }
    async deleteCategory(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return next(new ApiErrors("validation error", errors.array()));
            }
            const { id } = req.params;
            await CategoryService.deleteCategory(id);
            return res.status(200).json({ message: "Dish deleted successfully" });
        } catch (e) {
            next(e);
        }
    }
}

module.exports = new CategoryController();
