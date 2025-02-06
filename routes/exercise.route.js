import express from 'express'
import {
	createExercise,
	getExercise,
	getExercises,
	updateExercise,
	deleteExercise,
} from '../controllers/exercise.controller.js'

const router = express.Router()

router.get('/', getExercises)
router.get('/:id', getExercise)
router.post('/', createExercise)
router.put('/:id', updateExercise)
router.delete('/:id', deleteExercise)

export default router
