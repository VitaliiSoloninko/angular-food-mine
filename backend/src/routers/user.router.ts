import bcrypt from 'bcryptjs'
import Router from 'express'
import expressAsyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import { HTTP_BAD_REQUEST } from '../constants/http_status'
import { sample_users } from '../data'
import { User, UserModel } from '../models/user.model'

const router = Router()

router.get(
	'/seed',
	expressAsyncHandler(async (req, res) => {
		const usersCount = await UserModel.countDocuments()
		if (usersCount > 0) {
			res.send('Seed users is update!')
			return
		}
		await UserModel.create(sample_users)
		res.send('Seed users is done!')
	})
)

router.post(
	'/login',
	expressAsyncHandler(async (req, res) => {
		const { email, password } = req.body // Destructuring Assignment
		const user = await UserModel.findOne({ email })

		if (user && (await bcrypt.compare(password, user.password))) {
			res.send(generateTokenResponse(user))
		} else {
			res.status(HTTP_BAD_REQUEST).send('User name or password is not valid!')
		}
	})
)

router.post(
	'/register',
	expressAsyncHandler(async (req, res) => {
		const { name, email, password, address } = req.body
		const user = await UserModel.findOne({ email })
		if (user) {
			res.status(HTTP_BAD_REQUEST).send('User is already exist, please login')
			return
		}

		const encryptedPassword = await bcrypt.hash(password, 10)

		const newUser: User = {
			id: '',
			name,
			email: email.toLowerCase(),
			password: encryptedPassword,
			address,
			isAdmin: false,
		}

		const dbUser = await UserModel.create(newUser)
		res.send(generateTokenResponse(dbUser))
	})
)

const generateTokenResponse = (user: any) => {
	const token = jwt.sign(
		{
			id: user.id,
			email: user.email,
			isAdmin: user.isAdmin,
		},
		process.env.JWT_SECRET!,
		{
			expiresIn: '30d',
		}
	)

	return {
		id: user.id,
		email: user.email,
		name: user.name,
		address: user.address,
		isAdmin: user.isAdmin,
		token: token,
	}
}

export default router
