const  getEaster = () => {
    let year = parseInt(new Date().getFullYear())
	var f = Math.floor,
		G = year % 19,
		C = f(year / 100),
		H = (C - f(C / 4) - f((8 * C + 13)/25) + 19 * G + 15) % 30,
		I = H - f(H/28) * (1 - f(29/(H + 1)) * f((21-G)/11)),
		J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
		L = I - J,
		month = 3 + f((L + 40)/44),
		day = L + 28 - 31 * f(month / 4);

	return {month,day};
}
function addDays(date, days) {
   
    const copy = new Date(Number(date))
    copy.setDate(date.getDate() + days)
    result =  {day:`${copy.getDate()}`,month:`${copy.getMonth()+1}`}
    result.day = result.day.length == 1 ? `0${result.day}` : `${result.day}`
    result.month =  result.month.length == 1 ? `0${result.month}` : `${result.month}`
    return result
  }
  
const getMoveDate = (move_days) => {
    let object = getEaster();

    let actualYear = new Date().getFullYear();
    let date = new Date(`${actualYear} ${object.month} ${object.day}`);
    
    let result = addDays(date, move_days)
    return result;
}

module.exports = {getMoveDate}