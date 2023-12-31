export const sendEmail = (jsonData) => {
  fetch('https://hora-fibonacci-server.onrender.com/api/send-email', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', },
    body: JSON.stringify(jsonData),
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error al enviar el correo: ', error);
    });
};