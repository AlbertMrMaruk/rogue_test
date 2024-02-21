import store from "../store.js";
import clone from "../utils/clone.js";
import Box from "./Box.js";

class Player extends Box {
  health = 100;
  attackPower = 20;
  constructor(coords, className) {
    super();
    this.className = className;
    this._coords = coords;
  }

  damageHealth(damage) {
    this.health -= damage;
    const child = this._findChild(
      this._coords[0] * this.maxHeight + this._coords[1] + 1
    );
    child.querySelector(".health").style.width = `${this.health}%`;
  }

  changeCoords(gameMap, coords) {
    const child = this._findChild(
      this._coords[0] * this.maxHeight + this._coords[1] + 1
    );
    child.classList = "tile";

    child.querySelector(".health").remove();
    const newChild = this._findChild(
      coords[0] * this.maxHeight + coords[1] + 1
    );
    newChild.classList = `tile ${this.className} ${
      this.side === "left" ? "mirrorImg" : ""
    }`;
    newChild.insertAdjacentHTML(
      "afterbegin",
      ` <div class="health" style="width: ${this.health}%">
    </div>`
    );
    gameMap[coords[0]][coords[1]] = gameMap[this._coords[0]][this._coords[1]];
    gameMap[this._coords[0]][this._coords[1]] = "floor";
    this._coords = coords;
    return gameMap;
  }

  checkAttack(coords) {
    const state = store.getState();
    const gameMap = clone(state.gameMap);
    const enemyName = this.name === "Enemy" ? "Hero" : "Enemy";
    if (gameMap[coords[0]]?.[coords[1]]?.name === enemyName) {
      if (gameMap[coords[0]][coords[1]].health - this.attackPower <= 0) {
        const enemy = this._findChild(
          coords[0] * this.maxHeight + coords[1] + 1
        );
        enemy.classList = "tile";
        enemy.querySelector(".health").remove();
        gameMap[coords[0]][coords[1]].kill();
        gameMap[coords[0]][coords[1]] = "floor";
      } else {
        gameMap[coords[0]][coords[1]].damageHealth(this.attackPower);
      }
      store.set("gameMap", gameMap);
    }
  }

  attack() {
    this.checkAttack([this._coords[0] + 1, this._coords[1]]);
    this.checkAttack([this._coords[0] + 1, this._coords[1] - 1]);
    this.checkAttack([this._coords[0] + 1, this._coords[1] + 1]);
    this.checkAttack([this._coords[0], this._coords[1] - 1]);
    this.checkAttack([this._coords[0], this._coords[1] + 1]);
    this.checkAttack([this._coords[0] - 1, this._coords[1]]);
    this.checkAttack([this._coords[0] - 1, this._coords[1] - 1]);
    this.checkAttack([this._coords[0] - 1, this._coords[1] + 1]);
  }

  goUp() {
    this.setCoords([this._coords[0], this._coords[1] - 1]);
  }

  goDown() {
    this.setCoords([this._coords[0], this._coords[1] + 1]);
  }

  goLeft() {
    this.side = "left";
    this.setCoords([this._coords[0] - 1, this._coords[1]]);
  }

  goRight() {
    this.side = "right";
    this.setCoords([this._coords[0] + 1, this._coords[1]], "right");
  }

  _render() {
    const child = this._findChild(
      this._coords[0] * this.maxHeight + this._coords[1] + 1
    );
    child.classList.add(this.className);
    const elem = document.createElement("div");
    elem.classList.add("health");
    child.insertAdjacentHTML(
      "afterbegin",
      `
    <div class="health" style="width: ${this.health}%">
    </div>
    `
    );
  }
}

export default Player;
