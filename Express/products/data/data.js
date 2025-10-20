let products = [];
function gerarId() {
  // Parte 1: Timestamp em base 36
  const parte1 = Date.now().toString(36);
  // Parte 2: Valor aleatório em base 36
  const parte2 = Math.random().toString(36).substring(2, 10);
  // Parte 3: Contagem incremental (para evitar colisão dentro do mesmo milissegundo)
  // Cria um objeto para armazenar o estado do contador
  if (typeof gerarId.contador === 'undefined') {
    gerarId.contador = 0;
  }
  const parte3 = (gerarId.contador++).toString(36);
  // Concatena as partes para criar o ID final
  return `${parte1}-${parte2}-${parte3}`;
}

module.exports = { products, gerarId}
