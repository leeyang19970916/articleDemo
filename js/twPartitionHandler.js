// import jsonData from '../twPartition.json';
// console.log('jsonData', jsonData)

const xhr = new XMLHttpRequest();
xhr.open('GET', '../twPartition.json');
xhr.onload = function() {
  if (xhr.status === 200) {
    const jsonData = JSON.parse(xhr.responseText);
    console.log(jsonData,"jos")
    // 现在，jsonData 对象包含从 data.json 文件解析的数据
  } else {
    console.error('请求数据失败！');
  }
};
xhr.send();
function cityZoneHandler() {
    let dom=document.querySelector(".cityzone-selectContainer")
    dom.classList.toggle("active")
}