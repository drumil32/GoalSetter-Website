const express = require('express');
const router = express.Router();

const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalControllers.js');

const {protect} = require('../middleware/authMiddlerware');

// protect is middleware use to check authentication and authorization

router.route('/').get(protect,getGoals).post(protect,setGoal);
// router.get('/', getGoals);
// router.post('/', setGoal);

router.route('/:id').put(protect,updateGoal).delete(protect,deleteGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

module.exports = router;