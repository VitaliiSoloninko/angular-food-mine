import express from 'express'
import cors from 'cors'

const app = express()
app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:4200'],
	})
)

// localhost: 4200 - Angular
// localhost: 5000 - Express
