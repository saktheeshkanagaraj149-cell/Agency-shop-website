const express = require('express');
const router = express.Router();
const { createCustomer } = require('../controllers/customerController');

// POST /api/customers - create new customer
router.post('/', createCustomer);

// optional: GET all customers
router.get('/', async (req, res) => {
  try {
    const Customer = require('../models/Customer');
    const customers = await Customer.find().sort({ createdAt: -1 });
    res.json(customers);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
