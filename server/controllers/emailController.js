require('dotenv').config();
const nodemailer = require('nodemailer');

const sendEmail = async (req, res) => {
  const data = req.body;

  const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: 'jeisson.pruebas.correo@gmail.com',
    to: data.email,
    subject: 'Asunto del correo',
    text: 'Contenido del correo',
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Correo enviado correctamente');

    res.status(200).json({ message: 'Correo enviado exitosamente' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({ message: 'Error al enviar el correo' });
  }
};

module.exports = { sendEmail };
