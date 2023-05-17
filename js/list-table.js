let listStr = "";
let articleArr = [
  {
    id: Math.random(),
    type: [
      { id: "hot", name: "熱門" },
      { id: "edit", name: "精選" },
    ],
    category: "身心科",
    image: "./image/卡比.jpg",
    majorTitle: "標題標題標題",
    tag: [
      {
        id: "bodytone",
        name: "胃痛",
      },
      {
        id: "braincancer",
        name: "腦癌",
      },
    ],
    status: "已上架",
    date: {
      time: "11:02",
      date: "2023/12/52",
    },
    browse: {
      view: 50,
      share: 22,
      collect: 3,
    },
  },
  {
    id: Math.random(),
    type: [
      { id: "hot", name: "熱門" },
      { id: "edit", name: "精選" },
    ],
    category: "身心科",
    image: "./image/卡比.jpg",
    majorTitle: "大標題題題題題",
    tag: [
      {
        id: "bodytone",
        name: "胃痛",
      },
      {
        id: "braincancer",
        name: "腦癌",
      },
      {
        id: "nosebad",
        name: "過敏性鼻炎",
      },
      {
        id: "legtone",
        name: "腳痛",
      },
    ],
    status: "待審核",
    date: {
      time: "11:55",
      date: "2023/85/52",
    },
    browse: {
      view: 1,
      share: 0,
      collect: 666,
    },
  },
  {
    id: Math.random(),
    type: [
      { id: "hot", name: "熱門" },
      { id: "edit", name: "精選" },
    ],
    category: "身心科",
    image: "./image/卡比.jpg",
    majorTitle: "第三個標題",
    tag: [
      {
        id: "bodytone",
        name: "胃痛",
      },
      {
        id: "braincancer",
        name: "腦癌",
      },
      {
        id: "nosebad",
        name: "過敏性鼻炎",
      },
      {
        id: "legtone",
        name: "腳痛",
      },
    ],
    status: "待審核",
    date: {
      time: "11:55",
      date: "2023/85/52",
    },
    browse: {
      view: 16,
      share: 888,
      collect: 666,
    },
  },
];

const listTableUI = () => {
  let table_tbody_DOM = document.querySelector(".list-container tbody");
  for (let i = 0; i < articleArr.length; i++) {
    const element = articleArr[i];
    console.log(element, "element");
    listStr += `
    <tr data-id="${element.id}">
    <td class="image">
      <img src="${element.image}"  class="w-100" alt="">
    </td>
    <td class="title">
      <div class="text-dark mainTitle">${element.majorTitle}</div>
    </td>
    <td class="category">
    <div >${element.category}</div>
    <div class="text-end">${element.category}</div>
    </td>
    <td>
      <div class="d-flex">
      ${element.tag
        .map(
          (item) =>
            `<div data-id=${item.id} class="btn text-primary px-1 d-table">#${item.name}</div>`
        )
        .join(" ")}

        
      </div>
    </td>
    
    <td>${element.status}</td>
    <td class="date">
      <div class="date-time">${element.date.time}</div>
      <div class="date-date">${element.date.date}</div>
    </td>
    <td class="text-center">${element.browse.view}</td>
    <td class="text-center">${element.browse.share}</td>
    <td class="text-center">${element.browse.collect}</td>
    <td class="other">
      <div class="btn-group table-group">
        <button
          type="button"
          class="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        ></button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">預覽文章</a></li>
          <li><a class="dropdown-item" href="#">編輯文章</a></li>
          <li><a class="dropdown-item" href="#">刪除文章</a></li>
        </ul>
      </div>
    </td>
  </tr>
    `;
  }
  table_tbody_DOM.innerHTML = listStr;
};
listTableUI();
