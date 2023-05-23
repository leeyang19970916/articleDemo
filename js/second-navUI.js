function secondNavUI(params) {
  let secondNav = document.querySelector(".second-nav");
  let str = "";
  for (let i = 0; i < params.length; i++) {
    const element = params[i];
    str += `<button onclick="tabContentChange('${
      element.id
    }')" class="nav-link ${i === 0 && "active"}
     second-nav-item" id="v-pills-${
       element.id
     }-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${
      element.id
    }" type="button" role="tab" aria-controls="v-pills-${
      element.id
    }" aria-selected="${i === 0 ? "true" : "false"}">${element.name}</button> `;
  }
  secondNav.innerHTML += `<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">${str}</div>`;
}
// secondNavUI();

function stateButton(params) {
  let secondNav = document.querySelector(".second-nav");
  secondNav.innerHTML += `
  <div class="d-flex flex-nowrap">
  <button class="btn btn-primary w-50 mx-1">預覽文章</button>
  <button class="btn btn-danger w-50 mx-1 ">儲存文章</button>
  </div>`;
}
// stateButton();
