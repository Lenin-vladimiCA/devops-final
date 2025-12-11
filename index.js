const http = require("http");

const server = http.createServer((req, res) => {
  res.end("Hola Mundo DevOps!");
});

server.listen(3000, () => console.log("Servidor corriendo en puerto 3000"));

