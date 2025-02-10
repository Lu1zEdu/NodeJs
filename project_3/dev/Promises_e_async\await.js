//Para deixar o código mais legível, 
//as Promises e a sintaxe async/await são amplamente utilizadas. Reescrevendo o exemplo acima com Promises:

const fsPromises = require('fs').promises;

async function lerArquivo() {
  try {
    const data = await fsPromises.readFile('arquivo.txt', 'utf8');
    console.log('Conteúdo do arquivo:', data);
  } catch (err) {
    console.error('Erro na leitura do arquivo:', err);
  }
}

lerArquivo();
