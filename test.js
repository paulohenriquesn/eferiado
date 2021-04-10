const { getHolidaysByState, getHolidaysByDate } = require('./index')

console.log('Teste Feriado de Natal usando a string: ', getHolidaysByDate('25/12'))

console.log('Teste Feriado de Páscoa usando a string: ', getHolidaysByDate('04/04'))

console.log('Teste Regional SP: ', getHolidaysByDate('09/07'))

console.log('Teste Feriados Nacionais na mesma data: ', getHolidaysByDate('12/10'))

console.log('Teste Feriado de Natal usando um Date Object: ', getHolidaysByDate(new Date("12-25-2021")))

console.log("Teste getHolidaysByState", getHolidaysByState("SP", "09/07"))