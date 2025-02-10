const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para tratar requisições com JSON
app.use(express.json());

// Rota básica
app.get('/', (req, res) => {
  res.send('Olá, Express com Node.js!');
});

// Iniciando o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
