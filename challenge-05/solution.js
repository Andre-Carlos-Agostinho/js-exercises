/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
let randomArr = [1, 2, 3, 4, 5];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function returnArr(arr) {
  return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(returnArr(randomArr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
function learning(arr, index) {
  return arr[index];
}

console.log(learning(randomArr, 4));

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
let mixedValuesArr = [12, 'Girafa', 51, 'Bauru', true];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
console.log(learning(mixedValuesArr, 0));
console.log(learning(mixedValuesArr, 1));
console.log(learning(mixedValuesArr, 2));
console.log(learning(mixedValuesArr, 3));
console.log(learning(mixedValuesArr, 4));

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(bookName = undefined) {
  const books = {
    '1984': {
      quantidadePaginas: 348,
      autor: 'George Orwell',
      editora: 'Companhia das letras',
    },
    'As Seis Lições': {
      quantidadePaginas: 78,
      autor: 'Ludwig von Mises',
      editora: 'Mises Brasil',
    },
    'O Monge e o Executivo': {
      quantidadePaginas: 103,
      autor: 'James C. Hunter',
      editora: 'Sextante',
    },
  };

  return bookName ? books[bookName] : books;
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
console.log(book());

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
let bookName = 'O Monge e o Executivo';
console.log(`O livro ${bookName} tem ${book(bookName).quantidadePaginas} páginas!`);

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
console.log(`O autor do livro ${bookName} é ${book(bookName).autor}.`);

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log(`O livro ${bookName} foi publicado pela editora ${book(bookName).editora}`);
