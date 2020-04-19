const router = require("express").Router();
const db = require("../models");

router.get("/api/workouts", (req, res) => {
    db.Workout.find({})
    .sort({ date: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});

router.get("/api/workouts/range", (req, res) => {
    db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });

});

router.post("/api/workouts", (req, res) => {
    db.Workout.create({}).then(function(data){
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
      });
});

router.put("/api/workouts/:id", (req, res) => {
    const givenId = req.params.id;
    db.Workout.findOneAndUpdate({_id: givenId}, {$push: { exercises: req.body }}, { new: true, runValidators: true }
    ).then(function(data){
        res.json(data);
    }).catch(err => {
        res.status(400).json(err);
      });
});

module.exports = router;
