const express = require('express');
const router = express.Router();
const {getGoals,setGoal,updateGoal,deleteGoal} = require('../controllers/goalControllers.js');

router.route('/').get(getGoals).post(setGoal);
// router.get('/', getGoals);
// router.post('/', setGoal);
router.route('/:id').put(updateGoal).delete(deleteGoal);
// router.put('/:id', updateGoal);
// router.delete('/:id', deleteGoal);

module.exports = router;