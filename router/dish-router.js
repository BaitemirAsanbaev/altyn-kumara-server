const Router = require("express").Router;
const dishController = require("../controller/dish-controller");
const AuthMiddleware = require("../middleware/auth-middleware");
const adminMiddleware = require("../middleware/admin-middleware");

const router = new Router();

router.get("/all", AuthMiddleware, dishController.getAllDishes);
router.get("/:id", AuthMiddleware, dishController.getDish);
router.post("/create", adminMiddleware, dishController.createDishes);
router.put("/update/:id", adminMiddleware, dishController.updateDish);
router.delete("/delete/:id", adminMiddleware, dishController.deleteDish);

module.exports = router;
