const eferiado = require('./index')

console.log('Teste Feriado de Natal usando a string: ', eferiado('25/12'))

console.log('Teste Feriado de Páscoa usando a string: ', eferiado('04/04'))

console.log('Teste Regional SP: ', eferiado('09/07'))

console.log('Teste Feriados Nacionais na mesma data: ', eferiado('12/10'))

console.log('Teste Feriado de Natal usando um Date Object: ', eferiado(new Date("12-25-2021")))