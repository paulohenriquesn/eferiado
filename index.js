const { handleDateFormat } = require('./src/app-utils');
const feriados = require('./src/feriados');
const funcs = require('./src/functions')

const getHolidaysByState = (estado, data) => {
    const date = data && handleDateFormat(data)
    return feriados.regionais.filter((feriadoRegional) => {
        return estado === feriadoRegional.estado
    }).filter(({data}) => date ? data === date : true)
}

const getHolidaysByDate = (date) => {
    const returnedObject = { 
        nacionais: [],
        regionais: [],
    };

    date = handleDateFormat(date)

    returnedObject.data = date

    const foundNationalHolidays = feriados.nacionais.filter((feriadoNacional) => {
        if (feriadoNacional.move === undefined) return feriadoNacional.data === date

        const dateObject = {
            day: date.substr(0, 2),
            month: date.substr(3, 4)
        }
        const moveDate = funcs.getMoveDate(feriadoNacional.move)
        return moveDate.day === dateObject.day && moveDate.month === dateObject.month
    });

    const foundRegionalHolidays = feriados.regionais.filter(feriadoRegional => {
        return feriadoRegional.data === date
    });

    if (foundNationalHolidays.length) {
        returnedObject.nacionais = foundNationalHolidays.map(({ nome }) => ({ nome }));
    }

    if (foundRegionalHolidays.length) {
        returnedObject.regionais = foundRegionalHolidays.map(({ nome, estado }) => {
            return { nome,  estado }
        })
    }

    return returnedObject;
}

module.exports = { getHolidaysByDate, getHolidaysByState };
