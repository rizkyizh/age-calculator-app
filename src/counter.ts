import { daysInMonth } from "./utils/helper";
import { validationIsEmptyValue, validationInput } from "./utils/validation";

export type spanObject = {
  year: HTMLSpanElement;
  month: HTMLSpanElement;
  day: HTMLSpanElement;
}

type inputElCollection = {
  yearInputEl: HTMLInputElement;
  monthInputEl: HTMLInputElement;
  dayInputEl: HTMLInputElement;
}

type labelElCollection = {
  yearLabelEl: HTMLLabelElement;
  monthLabelEl: HTMLLabelElement;
  dayLabelEl: HTMLLabelElement;
}

type messageElValidation = {
  yearMessageEl: HTMLParagraphElement;
  monthMessageEl: HTMLParagraphElement;
  dayMessageEl: HTMLParagraphElement;
}

export type validationEL = {
  label: labelElCollection;
  input: inputElCollection;
  message: messageElValidation;
}

export function setupCounter(element: HTMLButtonElement, result: spanObject, form: HTMLFormElement, validationEL: validationEL, AllInputEl: NodeList) {

  validationInput(AllInputEl, validationEL)

  element.addEventListener('click', function (event) {
    event.preventDefault();
    if (validationEL.input.dayInputEl.value <= '31' && validationEL.input.monthInputEl.value <= '12') {

      if (validationIsEmptyValue(validationEL)) {
        const formData: FormData = new FormData(form);
        const { day: dayOfBirth, month: monthOfBirth, year: yearOfBirth }: any = Object.fromEntries(formData);
        const currentDate: Date = new Date();
        const current = {
          year: currentDate.getFullYear(),
          month: currentDate.getMonth() + 1,
          day: currentDate.getDate(),
        }
        let years: number = current.year - yearOfBirth;
        let months: number = current.month - monthOfBirth;
        let days: number = current.day - dayOfBirth;

        if (days < 0) {
          months -= 1
          days += daysInMonth(monthOfBirth - 1, yearOfBirth);
        }

        if (months < 0) {
          years -= 1
          months += 12
        }

        if (yearOfBirth > current.year) {
          result.day.innerHTML = '--'
          result.month.innerHTML = '--'
          result.year.innerHTML = '--'
        } else {
          result.year.innerHTML = `${years}`
          result.day.innerHTML = `${days}`
          result.month.innerHTML = `${months}`
        }
      }

    }
  })


}


