const asyncHandler = require('express-async-handler');

const Goal = require('../models/goalModel.js');

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find();
    res.status(200).json(goals);
});

const setGoal = asyncHandler(async (req, res) => {
    if( !req.body.text ){
        res.status(400);
        throw new Error('Please add text field');
    }
    const goal = req.body.text;
    console.log(goal);
    await Goal.create({text:goal});
    res.status(200).json({ message: "set goals"});
});

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if( !goal ){
        res.status(400);
        throw new Error(`Goal ${req.params.id} not found`);
    }
    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body,{new:true});
    res.status(200).json({message: updateGoal});
});

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if( !goal ){
        res.status(400);
        throw new Error(`Goal ${req.params.id} not found`);
    }
    const deletedGoal = await Goal.findByIdAndDelete(req.params.id);
    res.json({message: deletedGoal});  
});

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoal
};