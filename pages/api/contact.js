import nodemailer from "nodemailer";

const handler = (req, res) => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smpt.gmail.com",
    secure: false,
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
  });

  const mailInfo = {
    to: process.env.USER,
    from: req.body.from,
    subject: "Portfolio Message",
    text: req.body.mail,
  };

  transport.sendMail(mailInfo, (err, info) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(info.response);
    }
  });
};

export default handler;
