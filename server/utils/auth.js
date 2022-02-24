const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.TOKEN_SECRET;
const expiration = '3h';

module.exports = {
	authMiddleware: function({ req }) {
		let token = req.body.token || req.query.token || req.headers.authorization;

		if (req.headers.authorization) {
			token = token.split(' ').pop().trim();
		}

		if (!token) {
			return req;
		}

		try {
			const { data } = jwt.verify(token, secret, { maxAge: expiration });
			req.collector = data;
		} catch (err) {
			console.log(err, 'Invalid token');
		}
		return req;
	},
	signToken: function({ email, _id }) {
		const payload = { email, _id };
		return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
	}
};