const router = require('express').Router();
let Habit = require('../models/habit.model');

router.route('/add').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const numberOfDays = req.body.numberOfDays;
    const color = req.body.color;
    const state = req.body.state;


    const newHabit = new Habit({
        title,
        description,
        numberOfDays,
        color,
        state,
    });

    newHabit.save()
        .then(() => res.json('Habit added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/active').get((req, res) => {
    Habit.find({ state: 'active' })
        .then(habits => res.json(habits))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/closed').get((req, res) => {
    Habit.find({ state: 'closed' })
        .then(habits => res.json(habits))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').get((req, res) => {
    Habit.findById(req.params.id)
        .then(habit => res.json(habit))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Habit.findById(req.params.id)
        .then(habit => {

            habit.title = req.body.title;
            habit.description = req.body.description;
            habit.numberOfDays = req.body.numberOfDays;
            habit.color = req.body.color;
            habit.state = req.body.state;

            habit.save()
                .then(() => res.json('Habit updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;