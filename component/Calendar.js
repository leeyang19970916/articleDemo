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
    this.holidays=[]
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
    this.getHoliday()
  }
  getHoliday(){
    console.log(this.firstDayWeek,"this.firstDayWeek")
    // const startDate = new Date(this.year, this.month, 1);
    // const endDate = new Date(this.year, this.month+1, 0);
  
    // for (let date = 1; date <= this.lastDay; date++) {
    //   const dayOfWeek = date.getDay();
    //   console.log(date,"datee")
    //   // 判断是否为星期六或星期日，即假日
    //   if (dayOfWeek === 6 || dayOfWeek === 0) {
    //     console.log(date,"datee")
    //     // this.holidays.push(new Date(date)); // 将日期对象存入假日数组
    //   }
    // }
    // this.holidays.push(date)
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
  let { firstDayWeek, currentDay, lastDay } = calendar;
  console.log(calendar,"calendar")
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
      str += `<div class="dayItem"> <span class="active">${i}</span></div>`;
    } else {
      str += `<div class="dayItem"> <span>${i}</span> </div>`;
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
