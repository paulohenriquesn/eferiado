const feriados = require('./feriados.json').feriados

const funcs = require('./src/functions')

const isAMovelHoliday = (date) => {

    let getEaster = funcs.getEaster();
    let getCorpusChristi = funcs.getCorpusChristi();
    let getCarnival = funcs.getCarnival();
    let getSextaSanta = funcs.getSextaSanta();

    date_object ={
        day: date.substr(0,2),
        month: date.substr(3,4)
    }

    if(getEaster.day == date_object.day && getEaster.month == date_object.month) {
        return { eFeriado: true, nome: "Pascoa" };
    }

    if(getCorpusChristi.day == date_object.day && getCorpusChristi.month == date_object.month) {
        return { eFeriado: true, nome: "Corpus Christi" };
    }   

    if(getCarnival.day == date_object.day && getCarnival.month == date_object.month) {
        return { eFeriado: true, nome: "Carnaval" };
    }  

    if(getSextaSanta.day == date_object.day && getSextaSanta.month == date_object.month) {
        return { eFeriado: true, nome: "Sexta Santa" };
    }  

    return { eFeriado: false, nome: null };
}

const IsADateHoliday = (date) => {

    date = date.match(/(\d\d\/\d\d)+/)[0];

    const findHoliday = feriados.find(x => x.data == date);

    if (findHoliday) {
        return { eFeriado: true, nome: findHoliday.nome };
    }
    
    if(isAMovelHoliday(date).eFeriado) {
        return isAMovelHoliday(date);
    }
    
    return { eFeriado: false, nome: null };
}

module.exports = IsADateHoliday;