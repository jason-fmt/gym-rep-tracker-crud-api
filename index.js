import express from 'express'
import connectDB from './config/database.js'
import exerciseRoute from './routes/exercise.route.js'

const app = express()

// middleware
app.use(express.json())

// connect to database
connectDB()

// routes
app.use('/api/exercises', exerciseRoute)

// Root
app.get('/', (req, res) => {
   res.send(req.body)
   console.log(req.body)
})

// start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`)
})