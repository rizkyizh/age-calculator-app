const isLeapYear = (year: number): boolean => {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        return true
      } else {
        return false;
      }
    } else {
      return true;
    }
  } else {
    return false;
  }
}
const daysInMonth = (month: number, year: number): number => {
  if (month == 2) {
    if (isLeapYear(year)) {
      return 29;
    } else {
      return 28
    }
  } else if ([4, 6, 9, 11].includes(month)) {
    return 30;
  } else {
    return 31;
  }
}

const invalidInputMessage = (date: string): string => `Must be a valid ${date}`;

const requiredMessage: string = `The field is required`

export { daysInMonth, invalidInputMessage, requiredMessage }