import express from 'express'
import cors from 'cors'
// cors for redirect localhost server
// localhost: 4200 - Angular
// localhost: 5000 - Express

const app = express()
app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:4200'],
	})
)

app.get('/api/foods', (req, res) => {
	res.send('hello world!')
})

const port = 5000
app.listen(port, () => {
	console.log('Website served on http://localhost: ' + port)
})
