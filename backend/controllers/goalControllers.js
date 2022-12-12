const asyncHandler = require('express-async-handler');
const Goal = require('../models/goalModel.js');

// @desc    getGoals gives all goals of currently authenticated user
// @route   get /api/goals
// @access  private

const getGoals = asyncHandler(async (req, res) => {
    const goals = await Goal.find({user:req.user.id});
    res.status(200).json(goals);
});

// @desc    set goal for currently authenticated user
// @route   post /api/goals
// @access  private

const setGoal = asyncHandler(async (req, res) => {
    if( !req.body.text ){
        res.status(400);
        throw new Error('Please add text field');
    }
    const goal = req.body.text;
    console.log(goal);
    await Goal.create({
        text:goal,
        user:req.user.id
    });
    res.status(200).json({ message: "set goals"});
});

// @desc    update goal for currently authenticated user with given goal id
// @route   put /api/goals
// @access  private

const updateGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);

    if( !goal ){
        res.status(400);
        throw new Error(`Goal ${req.params.id} not found`);
    }

    // check the user who want to update the goal is actually goal owner or not
    if( goal.user.toString() !== req.user.id ){
        res.status(401);
        throw new Error(`user is not authorized`);
    }

    const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({message: updateGoal});
});

const deleteGoal = asyncHandler(async (req, res) => {
    const goal = await Goal.findById(req.params.id);
    if( !goal ){
        res.status(400);
        throw new Error(`Goal ${req.params.id} not found`);
    }

    if( goal.user.toString() !== req.user.id ){
        res.status(401);
        throw new Error(`user is not authorized`);
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