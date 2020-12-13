const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

// @route    POST api/contact
// @desc     Generate token for forgot password
// @access   Public
router.post("/", async (req, res) => {
  try {
    let testAccount = await nodemailer.createTestAccount();

    let smtpTrans = nodemailer.createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: testAccount.user, // generated ethereal user
        pass: testAccount.pass, // generated ethereal password
      },
    });

    const mailOpts = {
      from: testAccount.user,
      to: "deeps.o7o8.y@gmail.com",
      subject: "Mysuru Contact Form",
      text: `${req.body.fname} ${req.body.lname} ${req.body.email} ${req.body.phone}`,
    };

    smtpTrans.sendMail(mailOpts, (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.status(200).json({ message: "Sent" });
    });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server error");
  }
});
