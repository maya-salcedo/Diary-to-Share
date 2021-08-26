import express from 'express';
import data from '../data.js';
const router = express.Router();

router.get('/', async (req, res, next) => {
  res.json(data.diaries);
});

export default router;
