function titleLine(dom, title, type=null) {
  let more = true;
  if (type !== "more") {
    more = false;
  }
  let str = `<span class="title-name">${title}</span>
  ${more ?'<span class="title-more">查看更多</span>' : ""}`;
  dom.innerHTML += str;
}
