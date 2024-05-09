//Selecione todos os elementos HTML que deseja manipular

let formulario = document.querySelector('form');
let cxNome = document.querySelector('#nome');
let cxIdade = document.querySelector('#idade');
let cxPeso = document.querySelector('#peso');
let cxAlt = document.querySelector('#alt');
let cxImc = document.querySelector('#resultadoImc');
let btnEnviar = document.querySelector('#btnEnviar');
let aviso = document.querySelector('#aviso');
let dados = document.querySelectorAll('.pessoa'); // Cria uma array com todos os elementos de class "pessoa"
let btnLimpar = document.querySelector('#btnLimpar');

btnEnviar.addEventListener('click', function(e) { // aqui o evento foi colocado como parâmetro da função especificamente por se tratar de um botão de tipo 'submit', esse parâmetro é usado para evitar o comportamento padrão do botão, que é o envio do formulário e o refresh da página
   e.preventDefault();

   let nome = cxNome.value; // '.value' pega o valor que está dentro do elemento HTML
   let idade = cxIdade.value;
   let peso = cxPeso.value;
   let altura = cxAlt.value;
   let imc = (peso / (altura * altura)).toFixed(2);

   cxImc.value = imc;

   console.log(nome);
   console.log(idade);
   console.log(peso);
   console.log(altura);
   console.log(imc);

   let = sit = sitPeso(imc);
   aviso.textContent = sit;

   let pessoa = {
      nome: nome, idade: idade, peso: peso, altura: altura, imc: imc, situacao: sit
   }

   dados[0].textContent = 'Nome: ' + pessoa.nome;
   dados[1].textContent = 'Idade: ' + pessoa.idade + ' anos';
   dados[2].textContent = 'Peso: ' + pessoa.peso + ' Kg';
   dados[3].textContent = 'Altura ' + pessoa.altura + ' m';
   dados[4].textContent = 'IMC: ' + pessoa.imc;
   dados[5].textContent = 'Situação: ' + pessoa.situacao;

})

function sitPeso (imc) {
   let sit = '';

   if (imc < 18.5) {
      sit = 'Abaixo do peso';
   } else if (imc >= 18.5 && imc < 25) {
      sit = 'Peso normal';
   } else if (imc >= 25 && imc < 30 ) {
      sit = 'Sobrepeso';
   } else if (imc >= 30 && imc < 35 ) {
      sit = 'Obesidade I';
   } else if (imc >= 35 && imc < 40 ) {
      sit = 'Obesudade II';
   } else if (imc >= 40 ) {
      sit = 'Obesidade III';
   }

   return sit;
}

/* Hello! */

function calcImc(event) {
   let peso = cxPeso.value ;
   let alt = cxAlt.value;
   let imc = peso / (alt * alt);
 
   
   cxImc.value = imc

   console.log(peso)
   console.log(alt)
   console.log(imc)

   event.preventDefault()
}