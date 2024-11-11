const express = require('express');
const path = require('path');
const http = require('http');
const app = require('./app');
const socketIO = require('socket.io');

require('dotenv').config();

const PORT = process.env.PORT || 5000;

// Conectar a la base de datos
require('./helpers/dbConnect');

// Middleware para servir archivos estáticos desde el directorio `client/build`
app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Ruta para manejar todas las demás solicitudes y devolver el archivo `index.html` de React
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

const server = http.createServer(app);

const io = socketIO(server);
io.on("connection", client => {
  client.on('update:client', () => {
    client.broadcast.emit('update:server', true);
  });
  client.on("disconnect", () => console.log("Client disconnected"));
});

server.listen(PORT, () => {
  console.log('Server listening on port ' + PORT);
});
