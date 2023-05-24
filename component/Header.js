function Header(params) {
  let dom = document.querySelector("header");
  let str = `
    <div class="header-left">
      <div><button class="btn btn-warning">title</button></div>
      <div class="header-nav">
        <div class="header-nav-item">預約掛號</div>
        <div class="header-nav-item">健康報</div>
        <div class="header-nav-item">商城</div>
        <div class="header-nav-item">APP下載</div>
      </div>
    </div>
    <div class="header-right">
    <input type="text" class="form-control" aria-label="Dollar amount (with dot and two decimal places)">

      <button class="btn btn-primary text-white">追蹤臉書</button>
      <button class="btn btn-success text-white">加入LINE</button>
    </div>`;
  dom.innerHTML += str;
}
