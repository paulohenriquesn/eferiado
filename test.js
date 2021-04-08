const eferiado = require('./index')

console.log('Teste Feriado de Natal usando a string: ', eferiado('25/12'))

console.log('Teste Feriado de Páscoa usando a string: ', eferiado('04/04'))

console.log('Teste Regional SP: ', eferiado('07/09'))

console.log('Teste Feriado de Páscoa usando um Date Object: ', eferiado(new Date(2021, 3, 04)))