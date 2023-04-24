let str = `      <div
class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl"
>
<div class="modal-content">
  <div class="modal-header">
    <h5 class="modal-title" id="tagModalLabel">新增標籤</h5>
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
        <span>新增標籤:</span>
        <div class="input-group">
          <input
            type="text"
            class="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
          />
          <button
            class="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
          >
            +
          </button>
        </div>
      </div>
    </div>
    <div class="body-block">
      <div class="body_title">共有標籤:</div>
      <div class="mt-2 body-tag">
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
        <button type="button" class="btn btn-dark">心肌梗塞</button>
      </div>
    </div>
    <div class="body-block">
    <div class="body_title">屬性:</div>
    <div class="mt-2 body-tag">
      <button type="button" class="btn btn-warning">最新</button
      ><button type="button" class="btn btn-warning">熱門</button
      ><button type="button" class="btn btn-warning">愛心</button>
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
