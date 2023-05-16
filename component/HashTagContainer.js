function HashTagContainer(html) {
    let dom=document.querySelector(`.${html}`)
    let str=`
    <div class="title">熱門主題標籤</div>
    <div class="tagList">
      <div class="tag-item">#猴痘</div>
      <div class="tag-item">#疫苗</div>
      <div class="tag-item">#病毒</div>
      <div class="tag-item">#猴痘</div>
      <div class="tag-item">#疫苗</div>
      <div class="tag-item">#病毒</div>
    </div>`
    dom.innerHTML+=str
}