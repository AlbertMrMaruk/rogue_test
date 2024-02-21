import store from "../../store.js";
import clone from "../../utils/clone.js";
import Player from "../Player.js";

class Hero extends Player {
  name = "Hero";
  constructor(coords) {
    super(coords, "tileP");
    this.render();
  }

  setCoords(coords) {
    const state = store.getState();
    const gameMap = clone(state.gameMap);

    if (gameMap?.[coords[0]]?.[coords[1]]?.name === "Poison") {
      if (this.health !== 100) {
        this.health += 10;
      }
    }
    if (gameMap?.[coords[0]]?.[coords[1]]?.name === "Sword") {
      this.attackPower += 10;
    }
    if (
      gameMap?.[coords[0]]?.[coords[1]] === "floor" ||
      gameMap?.[coords[0]]?.[coords[1]]?.name === "Poison" ||
      gameMap?.[coords[0]]?.[coords[1]]?.name === "Sword"
    ) {
      store.set("gameMap", this.changeCoords(gameMap, coords));
    }
  }
  onMove(e) {
    switch (e.code) {
      case "KeyW":
        this.goUp();
        break;
      case "KeyD":
        this.goRight();
        break;
      case "KeyA":
        this.goLeft();
        break;
      case "KeyS":
        this.goDown();
        break;
      case "Space":
        this.attack();
    }
  }
  addEvents() {
    document.onkeydown = this.onMove.bind(this);
  }
  clearEvents() {
    document.onkeydown = null;
  }
  kill() {
    setTimeout(() => {
      this.clearEvents();
      const state = store.getState();
      state.enemyArr.forEach((enemy) => enemy.kill());
      store.clear();
      document.querySelector("body").replaceChildren();
      document
        .querySelector("body")
        .insertAdjacentHTML(
          "afterbegin",
          "<h1 style='color: red'>Игра закончена! Вы проиграли(</h1>"
        );
    }, 500);
  }
  render() {
    this._render();
    this.addEvents();
  }
}

export default Hero;
