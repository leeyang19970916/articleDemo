function innerHeightHandler() {
  let height = window.innerHeight;
  window.addEventListener("resize", function () {
    height = window.innerHeight;
  });
  return height;
}
const heightHandler = () => {
  let innerHeight = innerHeightHandler();
  let root = document.querySelector("#root");
  root.style.height = `${innerHeight}px`;
};
heightHandler();
