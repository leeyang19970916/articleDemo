function secondNavUI(params) {
  let secondNav = document.querySelector(".second-nav");
  let str = "";
  for (let i = 0; i < secondNavArr.length; i++) {
    
    const element = secondNavArr[i];
    str += `<button onclick="tabContentChange('${element.id}')" class="nav-link ${i === 0 && "active"}
     second-nav-item" id="v-pills-${
      element.id
    }-tab" data-bs-toggle="pill" data-bs-target="#v-pills-${
      element.id
    }" type="button" role="tab" aria-controls="v-pills-${
      element.id
    }" aria-selected="${i === 0 ? "true" : "false"}">${element.name}</button> `;
  }
  secondNav.innerHTML = `<div class="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">${str}</div>`;
}
secondNavUI();
