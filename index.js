const feriados = require('./feriados.json').feriados

const IsADateHoliday = (date) => {
    date = date.match(/(\d\d\/\d\d)+/)[0];
    const findHoliday = feriados.find(x => x.data == date)
    if (findHoliday) {
        return { eFeriado: true, nome: findHoliday.nome };
    }
    return { eFeriado: false, nome: null };
}

module.exports = IsADateHoliday;