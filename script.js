console.log('Script funcionando');

function nomeFuncao(numero1, numero2) {
  const resultado = numero1 + numero2;
  return resultado;
}

function gerarResultado(event) {
  event.preventDefault();
  const input1 = parseFloat(document.getElementById('inputNumero1').value);
  const input2 = parseFloat(document.getElementById('inputNumero2').value);
  const txtResultado = document.getElementById('txt-resultado');
  const resultado = nomeFuncao(input1, input2);

  if (isNaN(input1) && isNaN(input2)) {
    alert('Voce precisa digitar ambos dos inputs');
    return;
  }
  if (isNaN(input1)) {
    alert('Voce precisa digitar o numero no primeiro INPUT');
    return;
  }

  if (isNaN(input2)) {
    alert('Voce precisa digitar o numero no segundo INPUT');
    return;
  }

  txtResultado.innerText = `O resultado e ${resultado}`;
  alert(resultado);
  console.log(resultado);
  return;
}

document.addEventListener('submit', gerarResultado);
