const sendEmail = (req, res) => {
  const dataFromReact = req.body;
  console.log(dataFromReact);

  res.status(200).json({ message: 'Correo enviado exitosamente' });
};

module.exports = { sendEmail };