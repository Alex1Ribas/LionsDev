# 🧠 Módulo 1 - Fundamentos de Programação com JavaScript e Node.js

**Curso oferecido pela Lions Startups**  

Este repositório contém anotações, exercícios e projetos desenvolvidos durante o primeiro módulo do curso. O foco foi aprender os principais conceitos de lógica de programação e estruturação de código usando JavaScript com Node.js, além de ganhar familiaridade com o terminal e o VS Code.

---

## 🧩 Conteúdos Abordados

### ✅ Comandos de Terminal (CLI)
- `cd`, `ls`, `mkdir`, `rm`, `touch`, `cp`, `pwd`, `echo`

### ✅ Ambiente de Desenvolvimento
- **Editor:** Visual Studio Code
- **Extensões usadas:** Prettier, ESLint (opcional), TODO Highlight
- **Tema:** Bearded - Black & Diamond

### ✅ Tipos de Dados
- `String`, `Number`, `Boolean`, `null`, `undefined`, `Array`, `Object`
- Conversão com `parseInt()`, `parseFloat()`, `.toString()`, `String()`
- `typeof` para identificar tipos

### ✅ Variáveis
- Declaração com `let`, `const`, `var`
- Boas práticas de nomenclatura (`camelCase`)

### ✅ Operadores
- **Aritméticos:** `+`, `-`, `*`, `/`, `%`
- **Comparação:** `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
- **Lógicos:** `&&`, `||`, `!`

### ✅ Controle de Fluxo
- Condicionais: `if`, `else`, `else if`, `switch`
- Laços de repetição: `for`, `while`, `do...while`, `forEach`

### ✅ Funções
- Funções tradicionais
- Funções com parâmetros e retorno
- **Arrow functions:**
```js
const soma = (a, b) => a + b;

✅ Node.js e Estrutura de Projeto

    Inicialização: npm init

    Execução: node app.js

    Pacotes: npm install

    Organização com módulos:

        Exportação: module.exports = ...

        Importação: require('./arquivo')

✅ Entrada e Saída

    Entrada via terminal: process.stdin, readline.question()

    Saída: console.log(), process.stdout.write()

✅ Arrays

    Métodos praticados:

        push(), pop(), shift(), unshift(), splice()

        includes(), indexOf(), length

✅ Objetos

Criação e acesso:
const pessoa = { nome: "Ana", idade: 25 };
console.log(pessoa.nome); // ou pessoa["nome"]

✅ Debug e Comentários

    Impressão: console.log(), console.error()

    Comentários:

        Linha: // comentário

        Bloco: /* comentário */

🎯 Projeto Prático: Jogo de Adivinhação

    Uso de Math.random() e Math.floor() para gerar número aleatório

    Entrada com readline

    Lógica com condicionais e mensagens personalizadas

🚀 Habilidades em Desenvolvimento

    Lógica de programação

    Manipulação de dados com JavaScript

    Execução de scripts via terminal

    Organização e leitura de código

    Criação de pequenos projetos interativos
