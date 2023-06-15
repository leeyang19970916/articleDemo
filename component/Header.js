function Header(params) {
  let dom = document.querySelector("header");
  let str = `
    <div class="header-left">
      <div><button class="btn btn-warning">title</button></div>
      <div class="header-nav">
        <div class="header-nav-item" onclick="redirectTo('reservation')" >預約掛號</div>
        <div class="header-nav-item" onclick="redirectTo('article')" >健康報</div>
        <div class="header-nav-item">商城</div>
        <div class="header-nav-item">APP下載</div>
      </div>
    </div>
    <div class="header-right">
    <div class="search">
    <input type="text" class="form-control" placeholder="搜尋" aria-label="Dollar amount (with dot and two decimal places)">
<button class="seacrh-icon">搜</button>
    </div>

      <button class="btn btn-primary text-white">追蹤臉書</button>
      <button class="btn btn-success text-white">加入LINE</button>
    </div>`;
  dom.innerHTML += str;
}

function redirectTo(page) {
  console.log(window.location.href,"window.location")
  if (page==="reservation") {
    window.location.href = "/front_desk/reservation/reservation.html"
  }else if (page==="article") {
    window.location.href = "/front_desk/healthPage_home.html";
  }
  
}

export default Header