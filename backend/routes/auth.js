import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import Admin from '../models/Admin.js';
import authMiddleware from '../middleware/authMiddleware.js';

dotenv.config();

const router = express.Router();

// registration route (create first admin or allow new ones)
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  // only allow registration if there are no admins yet
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount > 0) {
      return res
        .status(403)
        .json({ message: 'Registration is closed. Please contact an existing admin.' });
    }
  } catch (err) {
    console.error('error checking admin count', err);
    return res.status(500).json({ message: 'Server error' });
  }

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const exists = await Admin.findOne({ email });
    if (exists) {
      return res.status(409).json({ message: 'Admin already exists' });
    }
    const admin = new Admin({ email, password });
    await admin.save();
    res.status(201).json({ message: 'Admin registered' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// login route
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required' });
  }

  try {
    const admin = await Admin.findOne({ email });
    if (!admin || !(await admin.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// return current admin info (requires valid token)
router.get('/me', authMiddleware, (req, res) => {
  // authMiddleware already attached admin to req
  res.json({ admin: req.admin });
});

export default router;
