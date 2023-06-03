import { invalidInputMessage, requiredMessage } from "./helper";
import { validationEL } from "../counter";

const validationInput = (AllInputEl: NodeList, validationEl: validationEL): void => {


  AllInputEl.forEach(el => {
    el.addEventListener('input', () => {
      if ((el as HTMLElement).id === 'day') {
        if (validationEl.input.dayInputEl.value > '31') {
          validationEl.message.dayMessageEl.innerHTML = invalidInputMessage('day')
          validationEl.label.dayLabelEl.classList.add('invalid-day')
        } else {
          validationEl.message.dayMessageEl.innerHTML = ""
          validationEl.label.dayLabelEl.classList.remove('invalid-day')
        }
      } else if ((el as HTMLElement).id === 'month') {
        if (validationEl.input.monthInputEl.value > '12') {
          validationEl.message.monthMessageEl.innerHTML = invalidInputMessage('month')
          validationEl.label.monthLabelEl.classList.add('invalid-month')
        } else {
          validationEl.message.monthMessageEl.innerHTML = "";
          validationEl.label.monthLabelEl.classList.remove('invalid-month');
        }
      } else if ((el as HTMLElement).id === 'year') {
        if (validationEl.input.yearInputEl.value) {
          validationEl.message.yearMessageEl.innerHTML = ""
          validationEl.label.yearLabelEl.classList.remove('invalid-year')
        }
      }
    })
  })
}



const validationIsEmptyValue = (validationEL: validationEL): boolean => {

  let isValid = true;

  if (validationEL.input.dayInputEl.value === "") {
    validationEL.label.dayLabelEl.classList.add('invalid-day')
    validationEL.message.dayMessageEl.innerHTML = requiredMessage;
    isValid = false;
  }

  if (validationEL.input.monthInputEl.value === "") {
    validationEL.label.monthLabelEl.classList.add('invalid-month')
    validationEL.message.monthMessageEl.innerHTML = requiredMessage;
    isValid = false
  }

  if (validationEL.input.yearInputEl.value === "") {
    validationEL.label.yearLabelEl.classList.add('invalid-year')
    validationEL.message.yearMessageEl.innerHTML = requiredMessage;
    isValid = false
  }

  return isValid;

}


export { validationIsEmptyValue, validationInput }