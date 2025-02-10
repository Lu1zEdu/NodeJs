//Middlewares são funções que interceptam as requisições e podem realizar operações como validação, 
//autenticação ou log antes de repassá-las para a próxima função na cadeia. Um exemplo simples:

// Middleware de log
function logRequests(req, res, next) {
    console.log(`${req.method} ${req.url}`);
    next(); // Importante: chama a próxima função na cadeia!
  }
  
  app.use(logRequests);
  
  //Esse middleware imprime no console o método HTTP e a rota de cada requisição recebida.
