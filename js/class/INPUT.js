class INPUT {
  constructor(dom, cancelIconDom) {
    this.dom = dom;
    this.value = "";
    this.cancelIconDom = cancelIconDom;
    this.cancelIconActive = false;
    this.dom.addEventListener("input", this.init.bind(this));
    this.cancelIconDom.addEventListener("click", this.reset.bind(this));
  };

  valueUpdate(value) {
    this.value = value
    return this
  }
  iconState() {
    if (this.value) {
      this.cancelIconActive = true;
    } else {
      this.cancelIconActive = false;
    }
    return this
  }
  iconActive() {
    if (this.cancelIconActive) {
      this.cancelIconDom.classList.add("active");
    } else {
      this.cancelIconDom.classList.remove("active");
    }
    return this
  }

  reset(e) {
    this.dom.value=""
    this.value = "";
    this.valueUpdate()
    this.iconState();
    this.iconActive();
    return;
  }
  init(e) {
    this.valueUpdate(e.target.value);
    this.iconState();
    this.iconActive();
  }
}
