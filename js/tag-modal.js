let str = `      <div
class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
>
<div class="modal-content">
  <div class="modal-header bg-primary text-light">
    <h5 class="modal-title " id="tagModalLabel">新增標籤</h5>
    <button
      type="button"
      class="btn-close"
      data-bs-dismiss="modal"
      aria-label="Close"
    ></button>
  </div>
  <div class="modal-body">
    <div class="body-block">
      <div class="add-newTag">
        <span>新增自訂標籤:</span>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="新增自訂標籤"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-warning"
            type="button"
            id="button-addon2"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <div class="body-block">
    <div class="body_title">分類:</div>
    <div class="mt-2 body-tag">
    ${typeTagListArr
      .map(
        (item) =>
          `<button data-id=${item.id} type="button" class="btn btn-warning">${item.name}</button>`
      )
      .join(" ")}
    </div>
  </div>
    <div class="body-block">
      <div class="body_title">標籤:</div>
      <div class="mt-2 body-tag normalTag-container">
      ${normalTaglistArr
        .map(
          (item) => `
        <button data-id="${item.id}" type="button" 
          class="btn btn-primary" onclick="currentTagHandler()">
          ${item.name}
        </button>
      `
        )
        .join(" ")}
    </div>
    </div>
    <div class="body-block">
      <div class="body_title">目前標籤:</div>
      <div class="mt-2 body-tag">
        <button type="button" class="btn btn-primary">Primary</button
        ><button type="button" class="btn btn-primary">Primary</button
        ><button type="button" class="btn btn-primary">Primary</button>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-primary w-25">確定</button>
    <button
      type="button"
      class="btn btn-secondary"
      data-bs-dismiss="modal"
    >
      取消
    </button>
  </div>
</div>
</div>`;
function tagModalUI(params) {
  let dom = document.querySelector("#tagModal");
  dom.innerHTML = str;
}
tagModalUI();
// function normalTagUI(params) {
//   let dom=document.querySelector(".normalTag-container")
//   let str=""
//   for (let i = 0; i < normalTaglistArr.length; i++) {
//     const item = normalTaglistArr[i];
//     str+=`<button type="button" class="btn btn-warning mr-1 mb-1">${item.name}</button>`
//   }
//   dom.innerHTML=str
// }
// normalTagUI()
function currentTagHandler(typeName, item) {
  let id = "123";
  let index = currentTagArr.findIndex((tag) => tag.id === id);
  if (index !== -1) {
    currentTagArr = currentTagArr.filter((tag) => tag.id !== id);
  } else {
    currentTagArr.push();
  }
}
