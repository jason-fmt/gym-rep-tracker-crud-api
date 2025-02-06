import Exercise from "../models/exercise.model.js";

export const getExercises = async (req, res) => {
   try {

      const allExercises = await Exercise.find({})
      res.status(200).json(allExercises)

   } catch (error) {
      res.status(500).json({message: error})
   }
}

// Get exercise
export const getExercise = async (req, res) => {
   try {
      const { id } = req.params
      const exercise = await Exercise.findById(id)

      if(!exercise) {
         res.status(404).json({message: 'Exercise not found'})
      }
      res.status(200).json(exercise)

   } catch (error) {
      res.status(500).json({message: 'Error fetching exercise', error: error.message})
   }
}

export const createExercise = async (req, res) => {
   try {
      // const { name, sets, reps } = req.body

      const exercise = await Exercise.create(req.body)
      res.status(200).json(exercise)

   } catch (error) {
      res.status(500).json({message: error.message})
   }
}

export const updateExercise = async (req, res) => {
   try {
      const { id } = req.params

      const exercise = await Exercise.findByIdAndUpdate(id, req.body)

      if(!exercise) {
         res.status(404).json({message: "Exercise not found"})
      }

      const updatedExercise = await Exercise.findById(id)
      res.status(200).json(updatedExercise)

   } catch (error) {
      res.status(500).json({message: error.message})
   }
}

export const deleteExercise = async (req, res) => {
   try {
      const { id } = req.params
      const exerciseToDelete = await Exercise.findByIdAndDelete(id)

      if(!exerciseToDelete) {
         res.status(404).status({message: 'Could not find item to delete'})
      }

      res.status(200).json({message: 'Successfully deleted.'})
   } catch (error) {
      res.status(500).json({message: error.message})
   }
}
