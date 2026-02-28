import mongoose from 'mongoose';

const propertySchema = new mongoose.Schema({
  title: { type: String, required: true },
  location: { type: String, required: true },
  price: { type: Number, required: true },
  type: { type: String, required: true },
  image: { type: String },
  description: { type: String },
  bedrooms: { type: Number },
  bathrooms: { type: Number },
  area: { type: String }
}, { timestamps: true });

const Property = mongoose.model('Property', propertySchema);
export default Property;
