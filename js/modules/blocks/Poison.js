import Item from "../Item.js";

class Poison extends Item {
  name = "Poison";
  constructor(coords) {
    super(coords, "tileHP");
    this.render();
  }

  render() {
    this._render();
  }
}

export default Poison;
