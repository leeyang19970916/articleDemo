function CardHorizontal(dom,data,type) {
    let str=""
for (let i = 0; i < data.length; i++) {
    const element = data[i];
    str += `<div class="article-item">
    <div class="article-image">image</div>
    <div class="article-title">
      <div class="title">
        ${element.title}
      </div>
      ${type==="content" ? `<div class="content">${element.content}</div>` :""}
      <div class="date">${element.date}</div>
    </div>
  </div>`;
}

  dom.innerHTML=str
}

function CardStraight(params) {}
