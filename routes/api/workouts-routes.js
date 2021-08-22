const router = require("express").Router();
const {Workout, Exercise} = require("../../model")


router.get("/", async(req, res) => {
    try{
        const workoutData = await Workout.findAll();
        res.status(200).json(workoutData);
    }catch(err){
        res.status(500).json(err);
    }
})

router.put("/:id", async(req, res) => {
    try{
        const workoutData = await Workout.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        if(!workoutData){
            res.status(404).json({message: "No workout data with this id found"})
            return;
        }
        res.status(200).json(workoutData)
    } catch(err){
        res.status(500).json(err)
    }
})

router.post("/", async (req, res) => {
    try{
        const workoutData = await Workout.create(req.body);
        res.status(200).json(workoutData)
    }catch (err) {
        res.status(500).json(err);
    }
})