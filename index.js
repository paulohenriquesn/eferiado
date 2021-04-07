const feriados = require('./feriados.json').feriados

const IsADateHoliday = (date) => {
    date = date.match(/(\d\d\/\d\d)+/)[0];
    const findHoliday = feriados.find(x => x.data == date)
    if (findHoliday) {
        return [true, { nome: findHoliday.nome }];
    }
    return [false];
}

module.exports = IsADateHoliday;