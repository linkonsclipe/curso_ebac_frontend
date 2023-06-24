const form = document.getElementById('form-calculo');
const mensagemIgualdade = 'Os números são iguais';

function validaNumero(primeiro, segundo) {
  return segundo > primeiro;
}

form.addEventListener('submit', function(e) {
  e.preventDefault(); //não deixa fazer reload na tela

  const primeiroCampo = parseInt(document.getElementById('primeiro').value);
  const segundoCampo = parseInt(document.getElementById('segundo').value);
  const mensagemPositiva = 'O segundo valor é maior que o primeiro';
  const mensagemNegativa = 'O segundo valor não é maior que o primeiro';

  if (validaNumero(primeiroCampo, segundoCampo)) {
    const containerMensagemPositiva = document.querySelector('.mensagemValidacao');
    containerMensagemPositiva.innerHTML = mensagemPositiva;
    containerMensagemPositiva.style.display = 'block';
  } else {
    const containerMensagemNegativa = document.querySelector('.mensagemValidacao');
    containerMensagemNegativa.innerHTML = mensagemNegativa;
    containerMensagemNegativa.style.display = 'block';
  }

document.getElementById('primeiro').value = '';
document.getElementById('segundo').value = '';  
});

const segundoCampo = document.getElementById('segundo');
const containerMensagemIgualdade = document.querySelector('.mensagemIgual');

segundoCampo.addEventListener('keyup', function() {
  const primeiroCampo = parseInt(document.getElementById('primeiro').value);
  const segundoValor = parseInt(segundoCampo.value);

  if (primeiroCampo === segundoValor) {
    containerMensagemIgualdade.innerHTML = mensagemIgualdade;
    containerMensagemIgualdade.style.display = 'block';
  } else {
    containerMensagemIgualdade.style.display = 'none';
  }

 
});

