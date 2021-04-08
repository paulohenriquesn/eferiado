const feriados = require('./src/feriados');
const funcs = require('./src/functions')

const IsADateHoliday = (date) => {

    let object_return = { eFeriado: false, eFeriadoRegional: false, feriadoNome: null, feriadoRegionalNome: null };

    if (date instanceof Date) {
        //Meses no Javascript começam por 0
        date = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0')
    } else {
        date = date.match(/(\d\d\/\d\d)+/)[0];
    }

    const findHoliday = feriados.nacionais.find(x => {
        //Verifica se possui o parâmetro move, relativo a quantidade de dias de
        //diferença da páscoa
        if (x.move === undefined) {
            //Se não for móvel, retorna o resultado da comparação
            return x.data == date
        } else {
            //Feriado com data móvel
            date_object = {
                day: date.substr(0, 2),
                month: date.substr(3, 4)
            }
            move_date = funcs.getMoveDate(x.move)
            return move_date.day == date_object.day && move_date.month == date_object.month
        }
    });

    const findRegionalHoliday = feriados.regionais.find(x => {
        return x.data == date
    });

    if (findHoliday) {
        object_return.eFeriado = true;
        object_return.feriadoNome = findHoliday.nome;
    }

    if (findRegionalHoliday) {
        object_return.eFeriadoRegional = true;
        object_return.feriadoRegionalNome = findRegionalHoliday.nome;
        object_return.feriadoRegionalEstado = findRegionalHoliday.estado;
    }

    return object_return;
}
module.exports = IsADateHoliday;
