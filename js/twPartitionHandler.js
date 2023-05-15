// 開關
function cityZoneHandler() {
  let dom = document.querySelector(".cityzone-selectContainer");
  dom.classList.toggle("active");
}

fetch("../twPartition.json")
  .then((response) => response.json())
  .then((jsonData) => {
    searchCityUIRender(jsonData);
  })
  .catch((error) => {
    console.error("JSON失敗", error);
  });
let locationObj = {
  area: "東部",
  city: "臺東縣",
  district: "不分區",
};
function searchCityUIRender(data) {
  // retur
  const areaArr = Object.keys(data);
  areaUI(areaArr);

  Object.keys(data).forEach((key) => {
    let area = null;

    if (key === locationObj.area) {
      area = data[key];
      cityUI(Object.keys(area));
    } else {
      // 不是北區就不要走了
      return;
    }
    Object.keys(area).forEach((key) => {
      let city = null;
      if (key === locationObj.city) {
        city = area[key];
        districtUI(Object.keys(city));
      } else {
        return;
      }
    });
  });
  return;
}
function areaUI(area) {
  let dom = document.querySelector(".cityzone-selectContainer .area");
  let str = "";
  area.forEach((item) => {
    str += `<div data-id="${item}" onclick="areaChange('${item}')" class="mainZone-item normal ${
      item === `${locationObj.area}` ? "active" : ""
    }">${item}</div>`;
  });
  dom.innerHTML = str;
}

function cityUI(city) {
  let dom = document.querySelector(".cityzone-selectContainer .city");
  let str = "";
  city.forEach((item) => {
    str += `<div data-id="${item}" onclick="cityChange('${item}')" class="minZone-item normal ${
      item === `${locationObj.city}` ? "active" : ""
    }">${item}</div>`;
  });

  dom.innerHTML = str;
}

function districtUI(district) {
  let dom = document.querySelector(".cityzone-selectContainer .district");
  let str = "";
  district.forEach((item) => {
    str += `<div data-id="${item}" onclick="districtChange('${item}')" class="minZone-item normal ${
      item === `${locationObj.district}` ? "active" : ""
    }">${item}</div>`;
  });
  dom.innerHTML = `<div data-id="不分區"  onclick="districtChange('不分區')"  class="minZone-item normal ${locationObj.district==='不分區' ?'active':''}">不分區</div>
<div class="d-flex flex-wrap district-list">
${str}
</div>`;
}

function areaChange(areaName) {
  console.log(areaName,"area")
}
function cityChange(cityName) {
  console.log(cityName,"cityName")
}
function districtChange(districtName) {
  console.log(districtName,"districtName")
}