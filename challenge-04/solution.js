/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
const isTruthy = param => param ? true : false;

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
console.log('0', isTruthy(0));
console.log('-0', isTruthy(-0));
console.log('0n', isTruthy(0n));
console.log('false', isTruthy(false));
console.log('undefined', isTruthy(undefined));
console.log('null', isTruthy(null));
console.log('NaN', isTruthy(NaN));
console.log('\'\'', isTruthy(''));

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
console.log('true', isTruthy(true));
console.log('1', isTruthy(1));
console.log('22', isTruthy(22));
console.log('new Date()', isTruthy(new Date()));
console.log('random string', isTruthy('random string'));
console.log('{}', isTruthy({}));
console.log('another truthy value', isTruthy('another truthy value'));
console.log('3.14', isTruthy(3.14));
console.log('console', isTruthy(console));
console.log('hello world', isTruthy('hello world'));

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
const carro = {
  marca: 'Honda',
  modelo: 'Fit',
  placa: 'XYZ-6789',
  ano: 2004,
  cor: 'Prata',
  quantasPortas: 5,
  assentos: 5,
  quantidadePessoas: 0
};

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = function(color) {
  this.cor = color;
  return true;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = function() {
  return this.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = function() {
  return this.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = function() {
  return this.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = function() {
  return `Esse carro é um ${this.obterMarca()} ${this.obterModelo()}`;
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/


// Mude a cor do carro para vermelho.


// E agora, qual a cor do carro?


// Mude a cor do carro para verde musgo.


// E agora, qual a cor do carro?


// Qual a marca e modelo do carro?


// Adicione 2 pessoas no carro.


// Adicione mais 4 pessoas no carro.


// Faça o carro encher.


// Tire 4 pessoas do carro.


// Adicione 10 pessoas no carro.


// Quantas pessoas temos no carro?

