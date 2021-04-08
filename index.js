const feriados = require('./feriados.json').feriados

const funcs = require('./src/functions')

const IsADateHoliday = (date) => {
    if(date instanceof Date){
        //Meses no Javascript começam por 0
        date = String(date.getDate()).padStart(2, '0') + '/' + String(date.getMonth() + 1).padStart(2, '0')
    }else{
        date = date.match(/(\d\d\/\d\d)+/)[0];
    }

    const findHoliday = feriados.find(x => {
        //Verifica se possui o parâmetro move, relativo a quantidade de dias de
        //diferença da páscoa
        if(x.move === undefined){
            //Se não for móvel, retorna o resultado da comparação
            return x.data == date
        }else{
            //Feriado com data móvel
            date_object ={
                day: date.substr(0,2),
                month: date.substr(3,4)
            }
            move_date = funcs.getMoveDate(x.move)
            return move_date.day == date_object.day && move_date.month == date_object.month
        }
    });
    if (findHoliday) {
        return { eFeriado: true, nome: findHoliday.nome };
    }
    
    return { eFeriado: false, nome: null };
}

module.exports = IsADateHoliday;