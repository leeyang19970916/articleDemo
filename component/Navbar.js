function Navbar(params) {
  let dom = document.querySelector("nav");
  let str = `        <div class="nav-container">
    <div class="nav-item">心血管</div>
    <div class="nav-item">糖尿病</div>
    <div class="nav-item">視力保健</div>
    <div class="nav-item">飲食保健</div>
    <div class="nav-item">健康生活</div>
    <div class="nav-item">專家治台</div>
    <div class="nav-item">影音專區</div>
  </div>`;
  dom.innerHTML += str;
}
