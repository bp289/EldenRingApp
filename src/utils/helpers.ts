export const removeSAndLowerCase = (input: string): string => {
  if (input.endsWith('es')) {
    return input.slice(0, -2).toLowerCase();
  } else if (input.endsWith('s')) {
    return input.slice(0, -1).toLowerCase();
  } else {
    return input.toLowerCase();
  }
};

export const capitalizeFirstLetter = (inputString: string): string => {
  return inputString.length
    ? inputString.charAt(0).toUpperCase() + inputString.slice(1)
    : inputString;
};
