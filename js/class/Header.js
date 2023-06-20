class HEADER {
  constructor(dom) {
    (this.dom = document.querySelector("header")),
      (this.list = ["預約掛號", "查詢掛號", "健康報", "商城", "APP下載"]),
      this.initRender();
  }
  initRender() {
    console.log(this.dom, "dommm");
    let navUI = this.navUI();
    let searchInput = this.searchInput();
    let btnLink = this.btnLink();

    let str = `    <div class="header-left">
    <div><button class="btn btn-warning">title</button></div>
    <div class="header-nav">
      ${navUI}
    </div>
  </div>
  <div class="header-right">
        ${searchInput}${btnLink}
  </div>`;
    this.dom.innerHTML = str;
  }
  navUI() {
    let str = "";
    this.list.forEach((item) => {
      str += `<div class="header-nav-item active" onclick="redirectTo('reservation')" >${item}</div>`;
    });
    return str;
  }
  searchInput() {
    return `    <div class="search">
    <input type="text" class="form-control" placeholder="搜尋" aria-label="Dollar amount (with dot and two decimal places)">
<button class="seacrh-icon">搜</button>
    </div>`;
  }
  btnLink() {
    return `      <button class="btn btnLink ">追蹤臉書</button>
    <button class="btn btnLink  ">加入LINE</button>`;
  }
}

export default HEADER


// function Header(params) {
//   let dom = document.querySelector("header");
//   let str = `
//     <div class="header-left">
//       <div><button class="btn btn-warning">title</button></div>
//       <div class="header-nav">
//         <div class="header-nav-item" onclick="redirectTo('reservation')" >預約掛號</div>
//         <div class="header-nav-item" onclick="redirectTo('article')" >健康報</div>
//         <div class="header-nav-item">商城</div>
//         <div class="header-nav-item">APP下載</div>
//       </div>
//     </div>
//     <div class="header-right">
//     <div class="search">
//     <input type="text" class="form-control" placeholder="搜尋" aria-label="Dollar amount (with dot and two decimal places)">
// <button class="seacrh-icon">搜</button>
//     </div>

//       <button class="btn btn-primary text-white">追蹤臉書</button>
//       <button class="btn btn-success text-white">加入LINE</button>
//     </div>`;
//   dom.innerHTML += str;
// }

// function redirectTo(page) {
//   console.log(window.location.href, "window.location");
//   if (page === "reservation") {
//     window.location.href = "/front_desk/reservation/reservation.html";
//   } else if (page === "article") {
//     window.location.href = "/front_desk/healthPage_home.html";
//   }
// }

// export default Header
