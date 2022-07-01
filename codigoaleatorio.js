
//Gerar codigo aleatorio
  
function randomCodigo(params, valor) {
      var random = '';
  var valores  = valor;
    for (var i = 0; i < params; i++) {
        random += valores.charAt(Math.floor(Math.random() * valores.length));
    }
    return random;
}

function gerarCodigo() {
  var uppercase = randomCodigo(2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')

  var numeros = randomCodigo(4, '0123456789')

  var simbolo = randomCodigo(1, '@#$%&')

  var aux_uppercase = randomCodigo(2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  var lowercase = randomCodigo(2,'abcdefghijklmnopqrstuvwxyz')

  var codigo = uppercase.concat(numeros,simbolo,aux_uppercase, lowercase)

  return codigo
}
console.log(gerarCodigo())
