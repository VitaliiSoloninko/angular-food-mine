import dotenv from 'dotenv'
dotenv.config()
process.env.MONGO_URI

import cors from 'cors'
import express from 'express'
import foodRouter from './routers/food.router'
import userRouter from './routers/user.router'

// cors for redirect localhost server
// localhost: 4200 - Angular
// localhost: 5000 - Express

const app = express()
app.use(express.json())
app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:4200'],
	})
)

app.use('/api/foods', foodRouter)
app.use('/api/users', userRouter)

const port = 5000
app.listen(port, () => {
	console.log('Website served on http://localhost: ' + port)
})
