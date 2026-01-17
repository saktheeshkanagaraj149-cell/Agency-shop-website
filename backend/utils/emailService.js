const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASSWORD
  }
});

const sendConfirmationEmail = async (customerEmail, customerName) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: customerEmail,
      subject: 'Sri Balaji Agency - Details Received ✓',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0;">Sri Balaji Agency</h1>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <p>Hello <strong>${customerName}</strong>,</p>
            <p>Thank you for reaching out to Sri Balaji Agency! We've received your details and our team will contact you within 24 hours with the best offers on our products.</p>
            <div style="background: white; padding: 15px; border-left: 4px solid #667eea; margin: 20px 0;">
              <p><strong>Your Details:</strong></p>
              <p>Email: ${customerEmail}</p>
            </div>
            <p><strong>In the meantime, you can:</strong></p>
            <ul>
              <li>Browse our products at <a href="https://sribalajiagency.com" style="color: #667eea;">sribalajiagency.com</a></li>
              <li>Call us: <strong>9443962675</strong></li>
              <li>Visit our store: 112B, Subramaniapuram Colony, Bypass Road, Sivakasi</li>
            </ul>
            <p>Best regards,<br><strong>Sri Balaji Agency Team</strong></p>
          </div>
          <div style="background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; border-radius: 0 0 8px 8px;">
            <p>© 2024 Sri Balaji Agency. All rights reserved.</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`Confirmation email sent to ${customerEmail}`);
  } catch (err) {
    console.error('Email send error:', err);
  }
};

const sendAdminNotification = async (customerData) => {
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.ADMIN_EMAIL,
      subject: '🔔 New Customer Lead - Sri Balaji Agency',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #FF6B35; color: white; padding: 20px; text-align: center;">
            <h2 style="margin: 0;">New Customer Lead</h2>
          </div>
          <div style="padding: 20px; background: #f9f9f9;">
            <p><strong>Name:</strong> ${customerData.name}</p>
            <p><strong>Email:</strong> ${customerData.email}</p>
            <p><strong>Phone:</strong> ${customerData.phone || 'Not provided'}</p>
            <p><strong>Address:</strong> ${customerData.address || 'Not provided'}</p>
            <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log(`Admin notification sent to ${process.env.ADMIN_EMAIL}`);
  } catch (err) {
    console.error('Admin notification error:', err);
  }
};

module.exports = { sendConfirmationEmail, sendAdminNotification };
