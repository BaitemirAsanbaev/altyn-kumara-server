const CategoryModel = require("../models/category");
class CategoryService {
    async getAllCategories() {
        return CategoryModel.find();
    }
    async getCategory(id) {
        return CategoryModel.findById(id);
    }
    async createCategory(obj) {
        return CategoryModel.create(obj);
    }
    async updateCategory(id, obj) {
        return CategoryModel.findByIdAndUpdate(id, obj, { new: true });
    }
    async deleteCategory(id) {
        return CategoryModel.findByIdAndDelete(id);
    }
}

module.exports = new CategoryService();
