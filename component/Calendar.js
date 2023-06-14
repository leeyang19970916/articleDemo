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
    this.weekends = [];
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
    // this.getHoliday(new Date(
    //   this.year,
    //   this.currentDate.getMonth(),
    // ).getDay())
    this.getHoliday();
  }
  getHoliday() {
    this.weekends=[]
    for (let day = 1; day <= this.lastDay; day++) {
      const currentDate = new Date(this.year, this.month - 1, day);
      const currentDay = currentDate.getDay(); // 获取当前日期是星期几
      // 存储星期六和星期日的日期
      if (currentDay === 6 || currentDay === 0) {
        // weekends.push(currentDate);
        this.weekends.push(currentDate.getDate());
      }
    }
    // console.log(weekends,"weekendsweekends",this.weekends,"this.weekends")
  }
  onMonthName() {
    this.monthName = this.monthNamesArr[this.month - 1];
    return this;
  }
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

let dateDOM = document.querySelector(".clinic-month");
let monthDOM = dateDOM.querySelector(".monthHandler .month");
let dayDOM = dateDOM.querySelector(".day");

function monthUI() {
  let { monthName, year } = calendar;
  monthDOM.innerHTML = `${year}年${monthName}`;
}
function dayUI() {
  let { firstDayWeek, currentDay, lastDay, weekends } = calendar;
  let week = 0;
  let str = "";
  if (firstDayWeek > 0) {
    week = firstDayWeek;
    for (let i = 0; i < week; i++) {
      str += ` <div class="dayItem none"></div>`;
    }
  }
  for (let i = 1; i <= lastDay; i++) {
    let isWeekend = weekends.findIndex((item) => item===i);
    if (i === currentDay) {
      str += `<div class="dayItem"> <span class="active">${i}</span></div>`;
    } else {
      str += `<div class="dayItem  ${
        isWeekend !==-1 ? "isWeek" : 'qqq' 
      }"> <span>${i}</span> </div>`;
    }
  }

  dayDOM.innerHTML = str;
}
monthUI();
dayUI();

function monthChange(e) {
  if (e === "next") {
    calendar.nextMonth();
  } else {
    calendar.prevMonth();
  }
  monthUI();
  dayUI();
}
