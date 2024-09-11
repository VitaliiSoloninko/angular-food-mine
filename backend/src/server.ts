import dotenv from 'dotenv'
dotenv.config()
import path from 'path'

import cors from 'cors'
import express from 'express'
import { dbConnect } from './configs/database.config'
import foodRouter from './routers/food.router'
import userRouter from './routers/user.router'
dbConnect()

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

app.use(express.static('public'))
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'))
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	console.log('Website served on http://localhost: ' + port)
})
