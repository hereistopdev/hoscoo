const formatCardNumber = (number, hidden = false) => {
  const numberStr = String(number);

  // Format the number by adding spaces every four digits
  const formattedNumber = numberStr.replace(/(.{4})/g, "$1 ").trim();

  if (hidden) {
    // Split the number into parts
    const parts = formattedNumber.split(" ");

    if (parts.length === 4) {
      // Hide the middle two parts and keep the first and last part visible
      return `${parts[0]} **** **** ${parts[3]}`;
    }
  }

  return formattedNumber;
};

export default formatCardNumber;
