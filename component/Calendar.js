// const monthNames = [
//     "一月",
//     "二月",
//     "三月",
//     "四月",
//     "五月",
//     "六月",
//     "七月",
//     "八月",
//     "九月",
//     "十月",
//     "十一月",
//     "十二月",
//   ];

class Calendar {
  constructor() {
    (this.currentDate = new Date()),
      (this.monthNamesArr = [
        "一月",
        "二月",
        "三月",
        "四月",
        "五月",
        "六月",
        "七月",
        "八月",
        "九月",
        "十月",
        "十一月",
        "十二月",
      ]);
    this.monthName = 0;
    this.year = 0;
    this.month = 0;
    this.currentDay = 0;
    this.lastDay = 0;
    this.firstDayWeek = 0;
    this.calculateDays();
  }
  calculateDays() {
    this.year = this.currentDate.getFullYear();
    this.month = this.currentDate.getMonth() + 1;
    this.monthName = this.monthNamesArr[this.month - 1];
    this.currentDay = this.currentDate.getDate();
    this.lastDay = new Date(this.year, this.month, 0).getDate();
    this.firstDayWeek = new Date(
      this.year,
      this.currentDate.getMonth(),
      1
    ).getDay();
  }
  onFirstDayWeek() {
    // console.log(new Date(this.year, this.month, 1).getDay());
  }
  onMonthName() {
    this.monthName = this.monthNamesArr[this.month - 1];
    return this;
  }
  onYear() {}
  onMonth() {}
  onCurrentDay() {}
  onLastDay() {}
  nextMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() + 1);
    this.currentDate.setDate(1);
    this.calculateDays();
    return this;
  }
  prevMonth() {
    this.currentDate.setMonth(this.currentDate.getMonth() - 1);
    this.currentDate.setDate(1);
    this.calculateDays();
    return this;
  }
}

let calendar = new Calendar();
console.log(calendar, "calendar");

let dateDOM = document.querySelector(".clinic-month");
let monthDOM = dateDOM.querySelector(".monthHandler .month");
let dayDOM = dateDOM.querySelector(".day");

function monthUI() {
  let { monthName, year } = calendar;
  monthDOM.innerHTML = `${year}年${monthName}`;
}
function dayUI() {
  let { firstDayWeek, currentDay, lastDay } = calendar;
  let week = 0;
  let str = "";
  if (firstDayWeek > 0) {
    week = firstDayWeek;
    for (let i = 0; i < week; i++) {
   
        str += ` <div class="dayItem none"></div>`;
      }
  }
  for (let i = 1; i <= lastDay; i++) {
    if (i === currentDay) {
      str += `<div class="dayItem active">${i}</div>`;
    } else {
      str += `<div class="dayItem">${i}</div>`;
    }
  }

  dayDOM.innerHTML = str;
}
monthUI();
dayUI();

function monthChange(e) {
  // console.log("swdfas")
  if (e === "next") {
    calendar.nextMonth();
  } else {
    calendar.prevMonth();
  }
  monthUI();
  dayUI();
}
