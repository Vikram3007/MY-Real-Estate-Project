import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from './models/Admin.js';

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    const email = process.argv[2];
    const password = process.argv[3];

    if (!email || !password) {
      console.error('Usage: node sampleAdmin.js <email> <password>');
      process.exit(1);
    }

    const exists = await Admin.findOne({ email });
    if (exists) {
      console.log('Admin already exists');
      process.exit(0);
    }

    const admin = new Admin({ email, password });
    await admin.save();
    console.log('Admin created');
    process.exit(0);
  } catch (err) {
    console.error('Error creating admin:', err);
    process.exit(1);
  }
};

createAdmin();
