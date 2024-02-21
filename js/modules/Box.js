class Box {
  _parentElement;
  maxWidth = 21;
  maxHeight = 13;
  constructor() {
    this._parentElement = document.querySelector(".field");
  }

  _findChild(query) {
    return this._parentElement.querySelector(`.tile:nth-child(${query})`);
  }
}

export default Box;
