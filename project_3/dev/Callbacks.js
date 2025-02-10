//A forma tradicional de tratar operações assíncronas em Node.js é por meio de callbacks. Exemplo usando o módulo nativo fs para leitura de arquivo:

const fs = require('fs');

fs.readFile('arquivo.txt', 'utf8', (err, data) => {
  if (err) {
    return console.error('Erro na leitura do arquivo:', err);
  }
  console.log('Conteúdo do arquivo:', data);
});
