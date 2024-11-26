// Define all possible password characters
const chars = {
    lower: "abcdefghijklmnopqrstuvwxyz",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    digits: "1234567890",
    symbols: "!@#$%^&*()-_=+[]|?><",
  };
  
  // Function to generate a secure random number
  function getRandomInt(min, max) {
    const range = max - min + 1;
    const randomValues = new Uint32Array(1);
    crypto.getRandomValues(randomValues);
    return min + (randomValues[0] % range);
  }

  // crypto is more secure random number generator than math.random()
  
  // Function to generate a random password
  function generatePassword(length = 14, options = { lowercase: true, uppercase: true, digits: true, symbols: true }) {
    const availableChars = [];
  
    if (options.lowercase) availableChars.push(...chars.lower);
    if (options.uppercase) availableChars.push(...chars.upper);
    if (options.digits) availableChars.push(...chars.digits);
    if (options.symbols) availableChars.push(...chars.symbols);
  
    if (availableChars.length === 0) {
      throw new Error("At least one character type must be selected");
    }
  
    let result = [];
  
    for (let i = 0; i < length; ++i) {
      const randomIndex = getRandomInt(0, availableChars.length - 1);
      result.push(availableChars[randomIndex]);
    }
  
    return result.join("");  // Join array into a string and return
  }
  
  // Example usage:
  const password = generatePassword(16, { lowercase: true, uppercase: true, digits: true, symbols: true });
  console.log(password);
  