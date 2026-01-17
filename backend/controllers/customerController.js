const Customer = require('../models/Customer');
const { sendConfirmationEmail, sendAdminNotification } = require('../utils/emailService');

exports.createCustomer = async (req, res) => {
  try {
    const { name, email, phone, address } = req.body;
    const exists = await Customer.findOne({ email });
    if (exists) return res.status(400).json({ error: 'Customer with this email already exists' });

    const customer = new Customer({ name, email, phone, address });
    await customer.save();

    // Send emails asynchronously (don't wait)
    sendConfirmationEmail(email, name);
    sendAdminNotification({ name, email, phone, address });

    return res.json({ success: true, data: customer, message: 'Details saved! Check your email for confirmation.' });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Server error' });
  }
};
