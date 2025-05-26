import router from './routes/designerRoutes.js';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';


dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/designers', router);
const MongoDB_URI = process.env.MONGO_URI || 'mongodb://mongo:27017/emptycup';
mongoose
  .connect(MongoDB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) =>   console.error('MongoDB Connection Error:', err) );

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
