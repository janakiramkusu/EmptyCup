import mongoose from 'mongoose';

const designerSchema = new mongoose.Schema({
  name: String,
  rating: Number,
  description: String,
  projects: Number,
  years: Number,
  price: String,
  phone1: String,
  phone2: String,
  shortlisted: {
    type: Boolean,
    default: false
  }
});

const Designer = mongoose.model('Designer', designerSchema);
export default Designer;
