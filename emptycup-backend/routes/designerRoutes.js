import express from 'express';
import Designer from '../models/Designer.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const designers = await Designer.find();
    res.json(designers);
  } catch (err) {
    res.json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
  const {
    name,
    rating,
    description,
    projects,
    years,
    price,
    phone1,
    phone2,
  } = req.body;

  const newDesigner = new Designer({
    name,
    rating,
    description,
    projects,
    years,
    price,
    phone1,
    phone2,
  });

  try {
    const savedDesigner = await newDesigner.save();
    res.status(201).json(savedDesigner);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.patch('/', async (req, res) => {
  try {
    const { id, shortlisted } = req.body;

    const designer = await Designer.findById(id);
    if (!designer) return res.status(404).json({ error: 'Designer not found' });

    designer.shortlisted = shortlisted; 
    await designer.save();

    res.json({ success: true, shortlisted: designer.shortlisted });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


export default router;
