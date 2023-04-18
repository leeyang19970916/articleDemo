
const tabContent = () => {
  let str = "";
  let tabContent = document.querySelector(".tab-content");

  for (let i = 0; i < secondNavArr.length; i++) {
    const element = secondNavArr[i];
    str += ` <div class="tab-pane fade ${
      i === 0 && "show active"
    }" id="v-pills-${element.id}" role="tabpanel" aria-labelledby="v-pills-${
      element.id
    }-tab" tabindex="0">${element.id}</div>`;
  }
  tabContent.innerHTML = str;

  contentRender()
};


const contentRender=()=>{
    let active=document.querySelector(".nav-link .active")
    console.log("active",active)
}
tabContent();