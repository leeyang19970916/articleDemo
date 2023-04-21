let taglistArr = [
  { id: "health", name: "健康" },
  { id: "text1", name: "測試" },

  { id: "bodyyyyy", name: "胃痛" },
  { id: "noseeeeee", name: "支氣管炎" },

  { id: "nose", name: "鼻塞" },
  { id: "head", name: "頭痛" },

  { id: "heart", name: "心臟病" },
  { id: "qwer", name: "神經科" },

  { id: "chinese", name: "中醫" },
  { id: "west", name: "西醫" },

  { id: "dick", name: "泌尿科" },
  { id: "wify", name: "婦產科" },

  { id: "ceacer", name: "癌症" },
  { id: "stone", name: "骨科" },

  { id: "bodyheart", name: "身心科" },
  { id: "attack", name: "肝臟打擊" },

  { id: "game", name: "艾爾登法還" },
  { id: "energy", name: "energy" },
];
let isEdit = false;
function tagListUI() {
  let tagContainerDOM = document.querySelector(".articleTags-list");
  let str = "";
  for (let i = 0; i < taglistArr.length; i++) {
    const element = taglistArr[i];
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
  taglistArr = taglistArr.filter((element) => element.id !== id);
  // console.log(taglistArr,"taggglistArrr")
  tagListUI();
  // return taglistArr
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
    taglistArr=taglistArr.filter(element=>element.name==value)
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
  taglistArr.push(newTag);

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
    for (let i = 0; i < taglistArr.length; i++) {
        const element = taglistArr[i];
        if (element.id===newTag.id) {
            element.name=newTag.name
            break
        }
    }
    tagListUI();
    document.querySelector("#newNameInput").value=""
    $("#staticBackdrop").modal('hide');
}
