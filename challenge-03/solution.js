// Declarar uma variável qualquer que receba um objeto vazio.
let obj = {};

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/
let pessoa = {
  nome: 'André',
  sobrenome: 'Agostinho',
  sexo: 'Masculino',
  idade: 19,
  altura: 1.76,
  peso: 70,
  andando: false,
  caminhouQuantosMetros: 0
};

/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/
pessoa.fazerAniversario = function () {
  this.idade++;
  return true;
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/
pessoa.andar = function (metrosCaminhados) {
  this.caminhouQuantosMetros += metrosCaminhados;
  this.andando = true;
  return true;
}

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/
pessoa.parar = function () {
  this.andando = false;
  return true;
}

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/
pessoa.nomeCompleto = function () {
  return `Olá! Meu nome é ${this.nome} ${this.sobrenome}!`;
}


/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/
pessoa.mostrarIdade = function () {
  return `Olá, eu tenho ${this.idade} anos!`;
}

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
pessoa.mostrarPeso = function () {
  return `Eu peso ${this.peso} Kg.`;
}

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/
pessoa.mostrarAltura = function () {
  return `Minha altura é ${this.altura} m.`;
}

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa?
*/
console.log(pessoa.nomeCompleto());

/*
Qual a idade da pessoa?
*/
console.log(pessoa.mostrarIdade());

/*
Qual o peso da pessoa?
*/
console.log(pessoa.mostrarPeso());

/*
Qual a altura da pessoa?
*/
console.log(pessoa.mostrarAltura());

/*
Faça a `pessoa` fazer 3 aniversários.
*/
pessoa.fazerAniversario();
pessoa.fazerAniversario();
pessoa.fazerAniversario();


/*
Quantos anos a `pessoa` tem agora?
*/
console.log(pessoa.idade);

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/
pessoa.andar(12);
pessoa.andar(20);
pessoa.andar(8);

/*
A pessoa ainda está andando?
*/
console.log(pessoa.andando ? 'Sim, está andando.' : 'Não, está parada.');

/*
Se a pessoa ainda está andando, faça-a parar.
*/
pessoa.parar();

/*
E agora: a pessoa ainda está andando?
*/
console.log(pessoa.andando ? 'Sim, está andando.' : 'Não, está parada.');

/*
Quantos metros a pessoa andou?
*/
console.log(`A pessoa caminhou ${pessoa.caminhouQuantosMetros} m.`);

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
pessoa.apresentacao = function () {
  let concordanciaSexo = 'o';
  let concordanciaIdade = 'anos';
  let concordanciaMetros = 'metros';

  if (pessoa.sexo.toLowerCase() === 'feminino')
    concordanciaSexo = 'a';

  if (pessoa.idade === 1)
    concordanciaIdade = 'ano';

  if (pessoa.caminhouQuantosMetros === 1)
    concordanciaMetros = 'metro';

  return `Olá, eu sou ${concordanciaSexo} ${this.nome} ${this.sobrenome}, tenho ${this.idade} ${concordanciaIdade}, ${this.altura} m de altura, meu peso é ${this.peso} Kg e, só hoje, eu já caminhei ${this.caminhouQuantosMetros} ${concordanciaMetros}!`;
}

// Agora, apresente-se ;)
console.log(pessoa.apresentacao());
