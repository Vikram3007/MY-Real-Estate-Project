import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Admin from './models/Admin.js';

dotenv.config();

(async() => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const a = await Admin.findOne({ email: 'vikramkannan000@gmail.com' });
    console.log('admin record:', a);
    if (a) {
      const ok = await a.comparePassword('3007vikram');
      console.log('compare with guess:', ok);
    }
  } catch (e) {
    console.error(e);
  } finally {
    process.exit(0);
  }
})();
