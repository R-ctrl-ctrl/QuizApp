// authMiddleware.js

const jwt = require('jsonwebtoken');
const User = require('../models/User'); 

function verifyToken(req, res, next) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ message: 'Token is missing.' });
  }

  jwt.verify(token, "secret123", async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token.' });
    }

    try {
      const user = await User.findOne({ email: decoded.email });
      if(!user){
        return res.status(404).json({ message: 'User not found.' });
      }
      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Server error.' });
    }
  });
}

module.exports = verifyToken;
