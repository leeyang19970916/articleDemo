class RESERVATION_SEARCH {
  constructor(dom, data) {
    (this.dom = dom),
      (this.data = data),
      (this.nolimited_DOM = ""),
      (this.list_DOM = ""),
      (this.activeArr = []);
    this.initDOMSetting();
    this.initUIRender();
    this.nolimited_DOM_control()
  }
  initDOMSetting() {
    this.nolimited_DOM = this.dom.querySelector(".notLimited");
    this.nolimited_DOM.addEventListener("click", this.resetArr.bind(this));
    this.list_DOM = this.dom.querySelector(
      ".major-content-list .list-one-line"
    );
  }
  initUIRender() {
    let str = "";
    this.data.forEach((item) => {
      str += `<div data-id="${item.code}" class="list-item condition">${item.text}</div>`;
    });
    this.list_DOM.innerHTML = str;

    // 綁定點擊事件
    const listItemElements = this.list_DOM.querySelectorAll(".list-item");
    listItemElements.forEach((item) => {
      item.addEventListener("click", this.optionSelect.bind(this));
    });
  }
  nolimited_DOM_control() {
    // console.log(this.nolimited_DOM, " this.nolimited_DOM");
    if (this.activeArr.length > 0) {
      this.nolimited_DOM.classList.remove("active");
    } else {
      this.nolimited_DOM.classList.add("active");
    }
  }

  optionSelect(event) {
    let target = event.target;
    let dataID = target.getAttribute("data-id");
    let value = target.textContent;

    let targetObj = {
      dataID,
      value,
    };
    target.classList.toggle("active");
    this.optionData(targetObj);
  }
  optionData(data) {
    let isExist = this.activeArr.findIndex(
      (item) => item.dataID === data.dataID
    );
    if (isExist !== -1) {
      this.activeArr.splice(isExist, 1);
    } else {
      this.activeArr.push(data);
    }
    this.nolimited_DOM_control();
    console.log(this.activeArr, "(this.activeArr ");
  }
  resetArr(event) {
    this.activeArr = [];

    this.list_DOM
      .querySelectorAll(".list-item")
      .forEach((item) => item.classList.remove("active"));
    this.nolimited_DOM_control();
  }
}
