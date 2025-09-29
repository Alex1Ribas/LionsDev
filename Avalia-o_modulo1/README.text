#Descrição da avaliação#

O código se trata de um gerenciador de contatos, modularizado com um arquivo principal `index.js` e suas funções: `Adicionar Contatos`, `Listar contatos`, `Atualizar` e `Remover Contatos`. Além dos módulos principais, foram criados os módulos `prompt` e `contatos`.

`index.js` – É o corpo principal onde tudo acontece, responsável por unir e executar todas as funções a partir de `switch case` (menu de funcionamento com base em uma escolha).

`AdicionarContatos.js` – Função responsável por receber a entrada do usuário usando o módulo `prompt-sync` e armazenar dentro da `array` denominada `contatos` em forma de objeto, com as propriedades solicitadas como: `nome`, `telefone` e `email` (o `id` foi feito a partir da posição na `array`).

`ListarContatos.js` – Função responsável pela listagem dos contatos feitos na função `Adicionar Contatos`, utiliza o laço de repetição `forEach` para percorrer a `array` e verificar se há contatos e avisar caso não tenha nenhum cadastrado.

Sobre o laço de repetição: `contatos.forEach((contato, index) => {` — a partir da `array` declarada, ele cria uma nova variável e mostra sua posição, depois exibe a resposta por meio do:
console.log(`\nID: \${index + 1}\nNome: \${contato.nome}\nTelefone: \${contato.telefone}\nEmail: \${contato.email}\`) 
Aqui vemos o comando`console.log`, responsável por exibir no console a ação solicitada, no caso, mostrar as propriedades dos objetos da `array`, caso existam, como `contato.index`, e nesse caso adicionamos `+ 1\` para que ele não veja o objeto como posição 0.

`AtualizarContatos.js` – Função responsável pela atualização do contato criado no `Adicionar`, e ao abrir a função, a função `Listar` automaticamente é executada para que o usuário possa escolher qual deseja atualizar. Ao solicitar a entrada do usuário, colocamos `-1` para que seja o item real escolhido através da posição, e fazemos a subtração pois no `Listar` adicionamos `1` apenas para ficar mais prática a escolha. Depois, é feita a verificação se a entrada do usuário é um número inteiro ou se existe na lista; se não for, retorna ao menu; se for, substitui os dados solicitados.

`RemoverContatos.js` – Para remoção dos contatos, também usamos a função `ListarContatos` como orientação de qual item desejamos remover. É feita a validação da entrada do usuário como número e subtraído `1` para localizar a posição do item correto. Depois de localizado, usamos manipulação da `array` para remover. No caso, usamos o `contatos.splice(entrada, quantidade)`. Aqui estamos falando: na `array` `contatos`, a partir do índice (entrada do usuário -1), remova essa quantidade de itens.

---

| Variável       | Onde aparece                   | Propósito                                              |
| -------------- | ------------------------------ | ------------------------------------------------------ |
| `prompt`       | Todos os arquivos              | Função para capturar a entrada do usuário via terminal |
| `contatos`     | `contatos.js` e outros módulos | Array que armazena todos os contatos cadastrados       |
| `opcao`        | `index.js`                     | Armazena a escolha do usuário no menu principal        |
| `nome`         | `AdicionarContatos.js`         | Armazena o nome informado pelo usuário                 |
| `telefone`     | `AdicionarContatos.js`         | Armazena o telefone informado                          |
| `email`        | `AdicionarContatos.js`         | Armazena o e-mail informado                            |
| `contato`      | `AdicionarContatos.js`         | Objeto criado com os dados do novo contato             |
| `atualizar`    | `AtualizarContatos.js`         | Índice do contato que o usuário deseja atualizar       |
| `novoNome`     | `AtualizarContatos.js`         | Novo nome digitado para atualização                    |
| `novoTelefone` | `AtualizarContatos.js`         | Novo telefone digitado                                 |
| `novoEmail`    | `AtualizarContatos.js`         | Novo e-mail digitado                                   |
| `remocao`      | `RemoverContatos.js`           | Índice do contato que será removido                    |
| `index`        | `ListarContatos.js`            | Índice usado no loop para exibir os contatos           |
| `contato`      | `ListarContatos.js`            | Objeto individual representando um contato da lista    |
