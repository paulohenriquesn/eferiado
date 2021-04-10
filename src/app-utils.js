function handleDateFormat(date) {
  if (date instanceof Date) {
    return (
      String(date.getDate()).padStart(2, "0") +
      "/" +
      String(date.getMonth() + 1).padStart(2, "0")
    );
  }
  return date.match(/(\d\d\/\d\d)+/)[0];
}

module.exports = { handleDateFormat };
