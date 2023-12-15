const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'your-email@gmail.com', // Your Gmail email address
    pass: 'your-password', // Your Gmail password
  },
});

// Handle coupon redemption
app.post('/redeem-coupon', (req, res) => {
  const { couponName, userEmail } = req.body;

  // Send confirmation email
  const mailOptions = {
    from: 'your-email@gmail.com', // Your Gmail email address
    to: userEmail,
    subject: 'Coupon Redeemed',
    text: `You have redeemed the coupon: ${couponName}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Coupon redeemed successfully!');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});