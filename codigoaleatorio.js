function randomCode(amount,  params) {
  var random = '';
    for (var i = 0; i < amount; i++) {
        random += params.charAt(Math.floor(Math.random()*params.length));
    }
  
  return random;
}

function generateCode() {
  
  var uppercase = randomCode(2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  var numbers = randomCode(4, '0123456789')
  var symbol = randomCode(1, '@#$%&!^*')
  var uppercaseSecond = randomCode(2, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
  var lowercase = randomCode(2,'abcdefghijklmnopqrstuvwxyz')
  var code = uppercase.concat(numbers,symbol,uppercaseSecond, lowercase)

  return code
}
console.log(generateCode())
