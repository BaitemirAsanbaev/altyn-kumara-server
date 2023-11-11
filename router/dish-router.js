const Router = require("express").Router;
const dishController = require("../controller/dish-controller");
const AuthMiddleware = require("../middleware/auth-middleware");

const router = new Router();

router.get("/all", AuthMiddleware, dishController.getAllDishes);
router.get("/:id", AuthMiddleware, dishController.getDish);
router.post("/create", AuthMiddleware, dishController.createDishes);
router.put("/update/:id", AuthMiddleware, dishController.updateDish);
router.delete("/delete/:id", AuthMiddleware, dishController.deleteDish);

module.exports = router;
