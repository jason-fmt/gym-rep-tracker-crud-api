import mongoose from 'mongoose'
import dotenv from 'dotenv'

// load env variables
dotenv.config()

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGODB_URI)
		console.log(`MongoDB connected: ${conn.connection.host}`)
	} catch (error) {
		console.error('Error connecting to database:', error)
		process.exit(1)
	}
}

export default connectDB
