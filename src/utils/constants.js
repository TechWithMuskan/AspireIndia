export const getCardFormat = (cardNum, showDetail) => {
  let number = showDetail
    ? cardNum?.toString()
    : `••••••••••••${cardNum?.toString().slice(12, 16)}`;
  const maxLength = 4;
  const amountOfSpaces = Math.ceil(number?.length / maxLength);
  var counter = 0;
  for (var i = 1; i <= amountOfSpaces; i++) {
    var space_index = i * 4 + (i - 1);
    number =
      number.slice(0, space_index + counter) +
      "   " +
      number.slice(space_index + counter);
    counter += 2;
  }
  return number;
};

export const getCvv = (cvv, showDetail) => {
  let cvvNum = showDetail ? cvv : "* * *";
  return cvvNum;
};

export const numberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
