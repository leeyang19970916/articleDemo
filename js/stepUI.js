let stepArray = ["預約日期", "資料填寫", "我的完成"];

function StepUIRender(step = 1) {
  let dom = document.querySelector("section.stepControl");
  let str = "";
  if (!dom) {
    console.log("StepUIRender not defined");
    return;
  }
for (let i = 0; i < stepArray.length; i++) {
    const e = stepArray[i];
    str+=` <div class="step ${step=== (i+1) ? 'active' : ''}"> <span class="step-num">${i+1}</span> <span>${e}</span> </div>`
}

  dom.innerHTML = `${str}<div class="line"></div>`

}


