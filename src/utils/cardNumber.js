const formatCardNumber = (number, hidden = true, half = false) => {
  const numberStr = String(number);

  // Format the number by adding spaces every four digits
  const formattedNumber = numberStr.replace(/(.{4})/g, "$1 ").trim();

  if (hidden) {
    // Split the number into parts
    const parts = formattedNumber.split(" ");

    if (parts.length === 4) {
      if (half) return `**** ${parts[3]}`;
      else return `${parts[0]} **** **** ${parts[3]}`;
    }
  }

  return formattedNumber;
};

export default formatCardNumber;
