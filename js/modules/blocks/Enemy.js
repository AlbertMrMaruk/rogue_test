import store from "../../store.js";
import clone from "../../utils/clone.js";
import { getRandomArbitrary } from "../../utils/getRandomArbitrary.js";
import Player from "../Player.js";

class Enemy extends Player {
  name = "Enemy";
  constructor(coords) {
    super(coords, "tileE");
    this.render();
  }
  setCoords(coords) {
    const state = store.getState();
    const gameMap = clone(state.gameMap);
    if (gameMap?.[coords[0]]?.[coords[1]] === "floor") {
      store.set("gameMap", this.changeCoords(gameMap, coords));
    }
  }
  timeoutMove() {
    this.interval = setInterval(() => {
      const side = getRandomArbitrary(1, 4);
      switch (side) {
        case 1:
          this.goRight();
          break;
        case 2:
          this.goDown();
          break;
        case 3:
          this.goLeft();
          break;
        case 4:
          this.goUp();
          break;
      }
      this.attack();
    }, 1000);
  }
  kill() {
    const state = store.getState();
    const killedEnemyCount = (state.killedEnemyCount ?? 0) + 1;
    clearInterval(this.interval);
    store.set("killedEnemyCount", killedEnemyCount);
    if (killedEnemyCount === state.enemyArr.length) {
      document.querySelector("body").replaceChildren();
      document
        .querySelector("body")
        .insertAdjacentHTML(
          "afterbegin",
          "<h1 style='color: green'>Игра закончена! Вы выиграли!</h1>"
        );
    }
  }
  render() {
    this._render();
    this.timeoutMove();
  }
}

export default Enemy;
