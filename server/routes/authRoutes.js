const express = require('express')
const connectMongoDB = require('../middlewares/connectMongoDB')
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const verifyToken = require('../middlewares/verifyToken')

const router = express.Router()
const app = express()
app.use(express.json())

router.post('/register', connectMongoDB, async (req, res) => {
	try {
		const { name, email, password } = req.body;
        console.log(req.body)
		const hashPassword = await bcrypt.hash(password, 10);
		const user = await User.create({ name, email, password: hashPassword })
		res.json({"message":"ok"})
	} catch (err) {
        console.log(err)
		res.json({"message":err.message})
	}
});

router.post('/login', connectMongoDB, async (req, res) => {
    console.log(req.body)
	const user = await User.findOne({
		email: req.body.email,
	})

	if (!user) {
        return res.json({ status: 'error', user: false })
	}

	const isPasswordValid = await bcrypt.compare(
		req.body.password,
		user.password
	)

	if (isPasswordValid) {
		const token = jwt.sign(
			{
				name: user.name,
				email: user.email,
			},
			'secret123'
		)
		return res.json({ status: 'ok', user: token })
	} else {
		return res.json({ status: 'error', user: false })
	}
});

router.get('/verifytoken', verifyToken, async (req, res) => {
	res.json({ message: 'This is a protected route.', user: req.user });
})



module.exports = router;
