const Router = require("express").Router;
const categoryController = require("../controller/category-controller");
const AuthMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

const router = new Router();

router.get("/all", AuthMiddleware, categoryController.getAllCategories);
router.get("/:id", AuthMiddleware, categoryController.getCategory);
router.post("/create", adminMiddleware, categoryController.createCategory);
router.put("/update/:id", adminMiddleware, categoryController.updateCategory);
router.delete("/delete/:id", adminMiddleware, categoryController.deleteCategory);

module.exports = router;
