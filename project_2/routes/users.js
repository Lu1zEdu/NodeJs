// routes/users.js
const express = require('express');
const router = express.Router();

// Rota para listar usuários
router.get('/', (req, res) => {
  res.send('Lista de usuários');
});

// Rota para criar um novo usuário
router.post('/', (req, res) => {
  // Aqui você receberia os dados enviados no corpo da requisição (req.body)
  res.send('Usuário criado');
});

module.exports = router;
