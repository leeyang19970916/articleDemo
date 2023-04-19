const fileImage=""

let articleContentUI = `<div class="article">
<div class="maj-title">
  <span>標題:</span> <input class="form-control" type="text">
</div>
<div class="min-title">
  <span>副標:</span> <input class="form-control" type="text">
</div>
<div class="tag_btn">
  <button type="button"  class="btn btn-outline-info"  data-bs-toggle="modal" data-bs-target="#tagModal">標籤管理</button>
</div>
<textarea  name="editor" id="editor" rows="10" cols="80">
</textarea>
</div>`;
let uploadImageUI = `${!fileImage ? `<input type="file" onchange="handleFileChange(event)"> ` :
`<img id="preview" src="" alt="Preview Image">`}`

// `<input type="file" onChange={handleFileSelect} />
// <div class="mt-3 w-100 image-block"> <img src="..." class="img-fluid w-100" alt="..."></div>
// `

const tabContent = () => {
  let str = "";
  let tabContent = document.querySelector(".tab-content");

  for (let i = 0; i < secondNavArr.length; i++) {
    const element = secondNavArr[i];
    str += ` <div class="tab-pane fade ${
      i === 0 && "show active"
    }" id="v-pills-${element.id}" role="tabpanel" 
    aria-labelledby="v-pills-${element.id}-tab" tabindex="0">
    ${articleContentUI}
    </div>`;
  }
  tabContent.innerHTML = str;
};
tabContent();

const tabContentChange = (id) => {
  if (!id) {
    console.log("tabContent id error");
    return;
  }
  let domId = `v-pills-${id}`;
  let tabDom = document.querySelector(`#${domId}`);
  let contentStr = "";
  if (id === "articleContent") {
    contentStr = articleContentUI;
  } else if (id === "articleImage") {
    contentStr = uploadImageUI;
  } else {
    contentStr = "qqqqq";
  }
  tabDom.innerHTML = contentStr;
  if (id === "articleContent") {
    createArticleContent();
  }
};
createArticleContent();
function createArticleContent(params) {
  CKEDITOR.replace("editor", {
    extraPlugins: "editorplaceholder,colorbutton",
    editorplaceholder: "Start typing here...",
    removeButtons: "PasteFromWord",
    tabSpaces: 4,
    undoStackSize: 50,
    skin: "kama",
    toolbar: "Basic",
    applicationTitle: "My WYSIWYG",
  });
}
function handleFileChange(event) {
  const file = event.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = function () {
    const preview = document.getElementById("preview");
    preview.src = reader.result;
  };
  reader.readAsDataURL(file);
}
