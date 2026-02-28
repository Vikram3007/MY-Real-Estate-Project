import express from 'express';
import Property from '../models/Property.js';
import authMiddleware from '../middleware/authMiddleware.js';
import multer from 'multer';
import path from 'path';

// configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});
const upload = multer({ storage });

const router = express.Router();

// public list
router.get('/', async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// admin only create (accepts multipart/form-data)
router.post('/', authMiddleware, upload.single('image'), async (req, res) => {
  const { title, location, price, type, description, bedrooms, bathrooms, area } = req.body;
  let imagePath = '';
  if (req.file) {
    imagePath = `/uploads/${req.file.filename}`;
  } else if (req.body.image) {
    imagePath = req.body.image; // in case client sent url
  }

  try {
    const property = new Property({
      title,
      location,
      price,
      type,
      image: imagePath,
      description,
      bedrooms,
      bathrooms,
      area
    });
    await property.save();
    res.status(201).json(property);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// admin update (accepts multipart/form-data)
router.put('/:id', authMiddleware, upload.single('image'), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = `/uploads/${req.file.filename}`;
    }
    const updated = await Property.findByIdAndUpdate(req.params.id, updateData, {
      new: true,
      runValidators: true
    });
    if (!updated) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// public single item
router.get('/:id', async (req, res) => {
  try {
    const prop = await Property.findById(req.params.id);
    if (!prop) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json(prop);
  } catch (err) {
    console.error(err);
    // invalid id or server error
    res.status(500).json({ message: 'Server error' });
  }
});

// admin delete
router.delete('/:id', authMiddleware, async (req, res) => {
  try {
    const deleted = await Property.findByIdAndDelete(req.params.id);
    if (!deleted) {
      return res.status(404).json({ message: 'Property not found' });
    }
    res.json({ message: 'Property deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

export default router;
