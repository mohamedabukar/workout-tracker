const router = require("express").Router();
const exerciseRoutes = require("./exercise-routes");
const workoutRoutes = require("./workouts-routes");

router.use("/exercise", exerciseRoutes);
router.use("/workouts", workoutRoutes);

module.exports = router;