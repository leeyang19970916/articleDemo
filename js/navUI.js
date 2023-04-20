const navbarUI = () => {
  const majorArr = [
    {
      id: "home",
      name: "首頁",
      item: [
        { id: "article_tags", name: "標籤管理" },
        { id: "article_content", name: "文章內容" },
      ],
    },
    {
      id: "article",
      name: "文章",
      item: [
        { id: "article_list", name: "文章列表" },
        { id: "article_content", name: "文章內容" },
        { id: "article_tags", name: "標籤管理" },
      ],
    },
    {
      id: "store",
      name: "商城",
      item: [
        { id: "article_tags", name: "標籤管理" },
        { id: "article_content", name: "文章內容" },
      ],
    },
  ];

  const navbarUI = document.querySelector("nav");
  let str = "";
  for (let i = 0; i < majorArr.length; i++) {
    const element = majorArr[i];
    const id = `accordion-${element.id}`;
    str += `
        <div class="accordion-item fw-bolder">
          <h2 class="accordion-header" id="${id}-header">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#${id}"
              aria-expanded="false"
              aria-controls="${id}"
            >
              ${element.name}
            </button>
          </h2>
          <div
            id="${id}"
            class="accordion-collapse collapse"
            aria-labelledby="${id}-header"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body text-light">
            ${
              element.item.length === 0
                ? ""
                : element.item
                    .map(function (item) {
                      return `<div class="item" onclick="lacationURLChange('${item.id}')" data-id=${item.id} > ${item.name}</div>`;
                    })
                    .join("")
            } 
            </div>
          </div>
        </div> `;
  }
  navbarUI.innerHTML = `
      <div class="accordion accordion-flush" id="accordionFlushExample">
        ${str}
      </div>
    `;
};
navbarUI();


const lacationURLChange=(id)=>{
// 獲取當前頁面的路徑部分
var currentPath = window.location.pathname;
// console.log(currentPath,currentUrl)
if (currentPath===`/${id}.html`) {
  return
}
  location.href = `../${id}.html`;
}