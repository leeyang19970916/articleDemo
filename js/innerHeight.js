function innerHeightHandler() {
  let height = window.innerHeight;

  return height;
}
const heightHandler = () => {
  let innerHeight = innerHeightHandler();
  let root = document.querySelector("#root");
  root.style.height = `${innerHeight - 50 }px`;
};
heightHandler();
window.addEventListener("resize", function () {
  heightHandler();
  // height = window.innerHeight;
});