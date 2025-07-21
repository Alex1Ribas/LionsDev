const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout
});

let estoq= []

exibirMenu()


function exibirMenu(){
    console.log(`
---------- Menu ---------
| 1. Cadastrar Produto  |
| 2. Exibir estoque     |
| 3. Editar produto     |
| 4. Remover Produto    |
| 5. Encontrar produto  |
| 6. sair               |
-------------------------    
    `)
rl.question('Escolha uma opção acima: ', (menu)=> {
switch(menu){
    case '1':
        cadastrarProduto()
    break
    case '2':
            exibirEstoque()
    break
    case '3':
        editarProduto()
    break
    case '4':
        removerProduto()
    break
    case '5':
        encontrarProduto()
    break
    case '6':
        rl.close()
        console.log('\n Até a proxima!!')
    break
    default:
    console.log('Digite uma opção valida')
    exibirMenu()
    }
})
}

function cadastrarProduto(){
    rl.question('Digite o nome do produto: ', (item)=>{
        rl.question('Digite a quantidade: ', (estoque)=>{
            rl.question('É uma vestimenta ou acessorio: ', (tipo) =>{
                estoq.push({
                    Produto: item,
                    Quantidade: estoque,
                    Tipo: tipo
                })
            
               console.log('\nRealizado com sucesso!')
               rl.question('Deseja cadastrar um novo produto? (s/n): ', (input)=>{
                if (input ==='s' || input === 'S'){return cadastrarProduto()} else{ exibirMenu()}
               })
            })
        })
    })
}

function exibirEstoque(){
    if( estoq.length === 0 ){
        console.log('Não existe produtos cadastrados, tente cadstrar um primeiro!\n')
        cadastrarProduto()
    } else {
    console.log(estoq)
    exibirMenu()
    }
}

function editarProduto() {
    rl.question('Digite o nome do produto que deseja editar: ', (edit) => {
        let encontrado = false;

        for (let i = 0; i < estoq.length; i++) {
            if (estoq[i].Produto === edit) {
                encontrado = true;

                rl.question('Digite o novo nome do produto: ', (novoNome) => {
                    rl.question('Digite a nova quantidade: ', (novaQuantidade) => {
                        rl.question('Digite o novo tipo: ', (novoTipo) => {
                            estoq[i] = {
                                Produto: novoNome,
                                Quantidade: parseFloat(novaQuantidade),
                                Tipo: novoTipo
                            };
                            console.log('Produto editado com sucesso!');
                            exibirMenu();
                        });
                    });
                });

                break;
            }
        }

        if (!encontrado) {
            console.log("Produto não encontrado. Tente novamente!");
            exibirMenu();
        }
    });
}
  

function removerProduto(){
    rl.question('Digite o nome do produto qual deseja remover: ', (remov)=>{
        for(let i = 0; i < estoq.length; i++){
            if (estoq[i].Produto === remov){
                estoq.splice(i, 1)
                console.log(`Operação realizada com sucesso!`)
            } else {
                console.log("Produto não encontrado tente novamente!")
            }
            exibirMenu()
        }
    })
}

function encontrarProduto() {
    rl.question('Digite qual produto deseja procurar: ', (busca) => {
        const resultados = estoq.filter(produto =>
            produto.Produto.toLowerCase().includes(busca.toLowerCase())
        );
        if (resultados.length > 0) {
            console.log('\nProdutos encontrados:');
            resultados.forEach(prod => {
                console.log(`- ${prod.Produto} | Quantidade: ${prod.Quantidade} | Tipo: ${prod.Tipo}`);
            });
        } else {
            console.log('Nenhum produto encontrado com esse nome.');
        }
        exibirMenu();
    });
}
