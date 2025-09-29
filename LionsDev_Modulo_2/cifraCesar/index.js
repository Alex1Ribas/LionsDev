function cifraDeCesar(palavra, deslocamento) {
    let alfabeto = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
                    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let resultado = '';
    
    for (let i = 0; i < palavra.length; i++) {
      let letra = palavra[i];
      let indiceLetra = -1;
      
      for (let j = 0; j < alfabeto.length; j++) {
        if (alfabeto[j] === letra) {
          indiceLetra = j;
          break;
        }
      }
      
      let novoIndice = indiceLetra + deslocamento;
      if (novoIndice >= alfabeto.length) {
        novoIndice = novoIndice - alfabeto.length;
      }
      resultado = resultado + alfabeto[novoIndice];
    }
    
    return resultado;
  }
  
  let cifrado = cifraDeCesar('hello world', 3); 
  console.log(cifraDeCesar('hello world', 3)); 
  
  function duplicatas(texto){
    let resultado = ''
    for (let i = 0; i < texto.length; i++){
        if(!resultado.includes(texto[i])){
            resultado += texto[i]; 
        }
  }
  return resultado
}
console.log(`seu texto sem duplicatas é: ${duplicatas(cifrado)}`)


function vogais(texto){
  const vogais = 'aeiouAEIOU'
  let resultado = 0
  let contador = {a:0, e:0, i:0, o:0, u:0 }
  let letra = texto.toLowerCase()

  for(let j = 0; j < letra.length; j++){
    if(vogais.includes(letra[j])){
      
      switch (letra[j]){
        case 'a':
          contador.a++
          break
        case 'e':
          contador.e++
          break
        case 'i':
          contador.i++
          break
        case 'o':
          contador.o++
          break
        case 'u':
          contador.u++
          break
        default:
        break
      }
      resultado ++;
      }
  }
  return [resultado,contador]
}

let result = vogais(duplicatas(cifrado))

console.log(`vogais: ${result[0]}`)
console.log(`cada volgal tem: a:${result[1].a} e:${result[1].e} i:${result[1].i} o:${result[1].o} u:${result[1].u}`)