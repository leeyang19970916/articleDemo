let fileImage = "";

let articleContentUI = `<div class="article">
<div class="mjr_title">撰寫文章內容:</div>
<div class="d-flex w-100 justify-content-between mt-3">

<div class="maj-title">
  <span>標題:</span> <input class="form-control" type="text">
</div>
<div class="checkbox-zone">             
 <div class="form-check">
<input
  class="form-check-input"
  type="checkbox"
  value=""
  id="flexCheckDefault"
/>
<label class="form-check-label" for="flexCheckDefault">
  熱門文章
</label>
</div>
<div class="form-check">
<input
  class="form-check-input"
  type="checkbox"
  value=""
  id="flexCheckChecked"
  checked
/>
<label class="form-check-label" for="flexCheckChecked">
  編輯精選
</label>
</div></div>
</div>
<div class="category-container">
<span>分類:</span>
<select class="form-select" aria-label="Default select example">
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
</div>
<div class="tag_btn">
  <button type="button"  class="btn btn-warning"  data-bs-toggle="modal" data-bs-target="#tagModal">標籤管理</button>
  <div class="tagList">
  <div class="tag-item">#心臟病</div>
  <div class="tag-item">#心血管</div>
  <div class="tag-item">#XXX</div>
  <div class="tag-item">#我不知道</div>
  </div>
</div>
<textarea  name="editor" id="editor" rows="10" cols="80">
</textarea>
</div>`;
let uploadImageUI = `
<div class="mjr_title">新增圖片:</div>
<div class="image-block"> 
 <label class="" for="uploadImage">  <img src="" class="image d-none " alt="">  <div class="image-content">  <div>向上箭頭</div>  上傳圖片</div> </label>
<input id="uploadImage" type="file"  onchange="handleFileChange(event)">
</div>`;

let metaUI = `
<div class="meta">
<div class="mjr_title">FB/OG 關鍵字:</div>
<section class="single-meta-container">
<div class="min-title">一般</div>
<div class="meta-item">
  <label for="title" class="form-label">title</label>
  <input type="text" class="form-control " id="title" placeholder="網頁標題 ex:攀岩鞋-攀岩運動用品｜熱銷推薦｜台灣迪卡儂">
</div>
<div class="meta-item">
  <label for="description" class="form-label">description</label>
  <input type="text" class="form-control " id="description" placeholder="描述網頁內容,150字內">
</div>
<div class="meta-item">
  <label for="Author" class="form-label">Author</label>
  <input type="text" class="form-control " id="Author" placeholder="網頁作者">
</div>
<div class="meta-item">
  <label for="keywords" class="form-label">keywords</label>
  <input type="text" class="form-control " id="keywords" placeholder="SEO關鍵字,用逗號分開">
</div>
<div class="meta-item">
  <label for="robots" class="form-label">robots</label>
  <input type="text" class="form-control " id="robots" placeholder="用於控制搜索引擎的爬蟲是否可以爬取網頁的內容,包括noindex、nofollow、noarchive">
</div>
</section>
<section class="single-meta-container">
<div class="min-title">og</div>
<div class="meta-item">
<label for="og:title" class="form-label">og:title</label>
<input type="text" class="form-control " id="og:title" placeholder="用於描述網頁的標題，與title標籤類似">
</div>
<div class="meta-item">
<label for="og:description" class="form-label">og:description</label>
<input type="text" class="form-control " id="og:description" placeholder="用於描述網頁的內容，與Description meta標籤類似">
</div>
<div class="meta-item">
<label for="og:url" class="form-label">og:url</label>
<input type="text" class="form-control " id="og:url" placeholder="用於描述網頁的網址">
</div>
<div class="meta-item">
<label for="og:site_name" class="form-label">og:site_name</label>
<input type="text" class="form-control " id="og:site_name" placeholder="網站的品牌名稱或公司名稱">
</div>
<div class="meta-item">
<label for="og:type" class="form-label">og:type</label>
<input type="text" class="form-control " id="og:type" placeholder="用於描述網頁的類型，包括article、video、music等">
</div>
<div class="meta-item">
<label for="og:image" class="form-label">og:image</label>
<input type="text" class="form-control " id="og:image" placeholder="用於指定網頁的預覽圖片。這個圖片通常會顯示在社交媒體平台（如 Facebook、Twitter 等）的預覽區域中，讓使用者更容易地理解網頁的內容">
</div>
<div class="meta-item">
<label for="og:image:height" class="form-label">og:image:height</label>
<input type="text" class="form-control " id="og:image:height" placeholder="指定圖片的高度">
</div>
<div class="meta-item">
<label for="og:image:width" class="form-label">og:image:width</label>
<input type="text" class="form-control " id="og:image:width" placeholder="指定圖片的寬度">
</div>
</section>
<section class="single-meta-container">
<div class="min-title">fb</div>
<div class="meta-item">
  <label for="fb:title" class="form-label">fb:title</label>
  <input type="text" class="form-control " id="fb:title" placeholder="fb的標題">
</div>
<div class="meta-item">
  <label for="fb:description" class="form-label">fb:description</label>
  <input type="text" class="form-control " id="fb:description" placeholder="fb的描述">
</div>
</section>
</div>
`;
// 標籤管理葉面

let testing = `<div class="mjr_title">分類管理:</div>
<div class="content d-flex flex-nowrap">
  <section class="w-100 listControl me-3">
    <div class="input-container">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
        />
        <button
          class="btn btn-secondary"
          type="button"
          id="button-addon2"
        >
          +
        </button>
      </div>
      <div class="btn btn-info" onclick="editStateHandler()">edit</div>
    </div>

    <div class="list">
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()" >
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()">
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()">
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()">
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()">
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()">
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()">
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()">
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()">
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
      <button class="btn btn-primary tag-btn" onclick="editModalHandler()">
        分類 <a href="" onclick="removeTagHandler()">x</a>
      </button>
    
  </div>
  </section>
  <section class="w-100 ms-3">詳細資料</section>`;

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
  console.log("id", id);
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
  } else if (id === "category" || id === "tag") {
    contentStr = testing;
  } else {
    contentStr = metaUI;
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

  const reader = new FileReader();

  reader.onload = (event) => {
    fileImage = true;
    const url = event.target.result;

    // img.src = url;
    // img.classList.add("wwwww");

    const image = document.querySelector(".image");
    const imageContent = document.querySelector(".image-content");
    image.classList.remove("d-none");
    imageContent.classList.add("d-none");
    image.setAttribute("src", url);

    // const img = document.createElement("img");
    // img.setAttribute("src", url);
    // img.setAttribute("class", "wwwww");
    // img.setAttribute("alt", "your-image-alt");
    // imgContainer.appendChild(img);

    // 將 Data URL 寫入編輯器的選區
    // const editor = window.editor;
    // const data = editor.getData();
    // editor.setData(data + `<img src="${url}">`);
  };

  // 讀取檔案成 Data URL
  reader.readAsDataURL(file);
}
