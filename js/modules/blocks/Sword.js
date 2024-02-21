import Item from "../Item.js";

class Sword extends Item {
  name = "Sword";
  constructor(coords) {
    super(coords, "tileSW");
    this.render();
  }
  render() {
    this._render();
  }
}

export default Sword;
