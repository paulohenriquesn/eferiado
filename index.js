const feriados = require('./src/feriados');
const funcs = require('./src/functions')

const isDateHoliday = (date) => {
    const returnedObject = { 
        eFeriadoNacional: false,
        eFeriadoRegional: false,
        feriadoNacional: null,
        feriadosRegionais: null
    };

    if (date instanceof Date) {
        date = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0')
    } else {
        [date] = date.match(/(\d\d\/\d\d)+/);
    }

    const foundNationalHoliday = feriados.nacionais.find(x => {
        if (x.move === undefined) return x.data == date

        const dateObject = {
            day: date.substr(0, 2),
            month: date.substr(3, 4)
        }
        const moveDate = funcs.getMoveDate(x.move)
        return moveDate.day === dateObject.day && moveDate.month === dateObject.month
    });

    const foundRegionalHolidays = feriados.regionais.filter(x => {
        return x.data == date
    });

    if (foundNationalHoliday) {
        returnedObject.eFeriadoNacional = true;
        returnedObject.feriadoNacional = foundNationalHoliday.nome;
    }

    if (foundRegionalHolidays.length) {
        returnedObject.eFeriadoRegional = true;
        returnedObject.feriadosRegionais = foundRegionalHolidays.map(({ nome, estado }) => {
            return { nome,  estado }
        })
    }

    return returnedObject;
}
module.exports = isDateHoliday;
