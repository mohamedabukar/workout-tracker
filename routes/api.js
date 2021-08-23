const router = require("express").Router();
const Workout = require("../models/workouts")


router.get("/api/workouts", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ]).then((data) => {
        res.json(data);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.aggregate([
        {
            $addFields: {
                totalDuration: {
                    $sum: '$exercises.duration'
                }
            }
        }
    ]).sort({_id:-1}).limit(7).then((data) => {
        res.json(data);
    });
});

router.post("/api/workouts", (req, res) => {
    Workout.create(req.body).then((data) => {
        res.json(data);
    });
});

router.put("/api/workouts/:id", (req, res) => {
    Workout.findByIdAndUpdate(req.params.id, {
        $push: { exercises: req.body }
    }).then((data) => {
        res.json(data);
    });
});


module.exports = router;