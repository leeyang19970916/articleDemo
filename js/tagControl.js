let isEdit = false;
function tagListUI() {
  let tagContainerDOM = document.querySelector(".articleTags-list");
  let str = "";
  for (let i = 0; i < normalTaglistArr.length; i++) {
    const element = normalTaglistArr[i];
    str += ` <div class="btn-set">
    <button
      type="button"
      data-bs-toggle="modal"
      data-bs-target="#staticBackdrop"
      class="btn btn-primary ${isEdit && 'app-icon'}"
      data-id="${element.id}"
      onclick="editModalHandler('${element.id}','${element.name}')"
    >
      ${element.name}
    </button>
    ${isEdit ? `<span onclick="removeTag('${element.id}')" class="remove-markIcon">X</span>` : ""}
  </div>`;
  }
  tagContainerDOM.innerHTML = str;
}
tagListUI();

const removeTag = (id) => {
  normalTaglistArr = normalTaglistArr.filter((element) => element.id !== id);
  // console.log(normalTaglistArr,"taggglistArrr")
  tagListUI();
  // return normalTaglistArr
};
const editHandler = () => {
  isEdit = !isEdit;
  tagListUI();
};
const searchTagHandler = () => {
    let value = document.querySelector("#searchInput").value;
    if (!value) {
      return;
    }
    normalTaglistArr=normalTaglistArr.filter(element=>element.name==value)
    // 篩選沒寫完懶得寫了
    tagListUI();
};
const addTagHandler = () => {
  let value = document.querySelector("#addInput").value;
  console.log(value, "vasda");
  if (!value) {
    return;
  }
  let newTag = {
    id: `${ new Date().getTime().toString()}`,
    name: value,
  };
  normalTaglistArr.push(newTag);

  document.querySelector("#addInput").value = "";
  tagListUI();
};

const editModalHandler=(id,name)=>{
    let nowName=document.querySelector(".now-tagName")
    nowName.setAttribute("data-id",id)
    nowName.innerHTML=`目前名稱: <span>${name}</span>`
}
const confirmModal=()=>{
    let tagId=document.querySelector(".now-tagName").getAttribute("data-id")
    let newValue=document.querySelector("#newNameInput").value
    if (!newValue.trim()) {
        return
    }
    let newTag={id:tagId,name:newValue}
    for (let i = 0; i < normalTaglistArr.length; i++) {
        const element = normalTaglistArr[i];
        if (element.id===newTag.id) {
            element.name=newTag.name
            break
        }
    }
    tagListUI();
    document.querySelector("#newNameInput").value=""
    $("#staticBackdrop").modal('hide');
}
