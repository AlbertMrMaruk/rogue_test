import Box from "./Box.js";
class Item extends Box {
  _coords = [];
  constructor(coords, className) {
    super();
    this.className = className;
    this._coords = coords;
  }

  getCoords() {
    return this._coords;
  }

  _render() {
    const child = this._findChild(
      this._coords[0] * this.maxHeight + this._coords[1] + 1
    );
    child.classList.add(this.className);
    this._child = child;
  }
}

export default Item;
