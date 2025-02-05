import mongoose from "mongoose";

const ExerciseSchema = mongoose.Schema(
   {
      name: {
         type: String,
         required: true
      },
      sets: {
         type: Number,
         required: true,
      },
      reps: {
         type: Number,
         required: true
      }
   },
   {
      timestamps: true
   }
)

const Exercise = mongoose.model('Exercise', ExerciseSchema)
export default Exercise