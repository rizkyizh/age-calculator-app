import './style.css'
import btnIcon from './assets/images/icon-arrow.svg';
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('.container')!.innerHTML = `
    <div id="app">
    <div class="up-content">
      <form class="form-wrapper">
        <div class="day-wrapper">
          <label id="label-day" for="day">DAY</label>
          <input placeholder="DD" type="text" name="day" id="day" maxlength="2"/>
          <p class="validation invalid-day"></p>
          </div>
          <div class="month-wrapper">
          <label id="label-month" for="month">MONTH</label>
          <input placeholder="MM" type="text" name="month" id="month" maxlength="2"/>
          <p class="validation invalid-month"></p>
          </div>
          <div class="year-wrapper">
          <label id="label-year"  for="year">YEAR</label>
          <input placeholder="YYYY" type="text" name="year" id="year" maxlength="4"/>
          <p class="validation invalid-year"></p>
        </div>
        <button id="btn-submit" type="submit">
          <img src="${btnIcon}" />
        </button>
      </form>
    </div>
    <div class="down-content">
      <p><span id="span-year">--</span> years</p>
      <p><span id="span-month">--</span> months</p>
      <p><span id="span-day">--</span> days</p>
    </div>
    </div>
`

const spanYear = document.querySelector<HTMLSpanElement>('#span-year')!;
const spanMonth = document.querySelector<HTMLSpanElement>('#span-month')!;
const spanDay = document.querySelector<HTMLSpanElement>('#span-day')!;



setupCounter(
  document.querySelector<HTMLButtonElement>('#btn-submit')!,
  { year: spanYear, month: spanMonth, day: spanDay },
  document.querySelector<HTMLFormElement>('.form-wrapper')!,
  {
    label: {
      dayLabelEl: document.querySelector<HTMLLabelElement>('#label-day')!,
      monthLabelEl: document.querySelector<HTMLLabelElement>('#label-month')!,
      yearLabelEl: document.querySelector<HTMLLabelElement>('#label-year')!,
    },
    input: {
      dayInputEl: document.querySelector<HTMLInputElement>('#day')!,
      monthInputEl: document.querySelector<HTMLInputElement>('#month')!,
      yearInputEl: document.querySelector<HTMLInputElement>('#year')!,
    },
    message: {
      dayMessageEl: document.querySelector<HTMLParagraphElement>('.invalid-day')!,
      monthMessageEl: document.querySelector<HTMLParagraphElement>('.invalid-month')!,
      yearMessageEl: document.querySelector<HTMLParagraphElement>('.invalid-year')!,
    }
  },
  document.querySelectorAll('input')
)
