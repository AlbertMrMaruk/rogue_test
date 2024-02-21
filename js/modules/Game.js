import store from "../store.js";
import Box from "./Box.js";
import { getRandomArbitrary } from "../utils/getRandomArbitrary.js";
import Poison from "./blocks/Poison.js";
import Enemy from "./blocks/Enemy.js";
import Hero from "./blocks/Hero.js";
import Sword from "./blocks/Sword.js";

class Game extends Box {
  poisonCount = 10;
  swordCount = 2;
  enemyCount = 10;
  constructor() {
    super();
  }

  _renderMap() {
    const map = [];
    for (let x = 0; x < this.maxWidth; x++) {
      map[x] = [];
      for (let y = 0; y < this.maxHeight; y++) {
        const elem = document.createElement("div");
        elem.classList.add("tile");
        elem.classList.add("tileW");
        elem.style.left = `${x * 50}px`;
        elem.style.top = `${y * 50}px`;
        this._parentElement.appendChild(elem);
        map[x][y] = "wall";
      }
    }
    // Размещение комнат
    const randomRooms = Array.from(
      { length: getRandomArbitrary(5, 10) },
      () => {
        const width = getRandomArbitrary(3, 5);
        const height = getRandomArbitrary(3, 5);
        const x_start = getRandomArbitrary(0, this.maxWidth - 1);
        const x_end = x_start + width;
        const y_start = getRandomArbitrary(0, this.maxHeight - 1);
        const y_end = y_start + height;
        return [
          [x_start, y_start],
          [
            x_end >= this.maxWidth ? this.maxWidth - 1 : x_end,
            y_end >= this.maxHeight ? this.maxHeight - 1 : y_end,
          ],
        ];
      }
    );
    randomRooms.forEach((room) => {
      for (let i = room[0][0]; i <= room[1][0]; i++) {
        for (let j = room[0][1]; j <= room[1][1]; j++) {
          const child = this._parentElement.querySelector(
            `.tile:nth-child(${i * this.maxHeight + j + 1})`
          );
          child.classList.remove("tileW");
          map[i][j] = "floor";
        }
      }
    });
    // Размещение горизонтальных линий
    const randomHorizLines = Array.from(
      { length: getRandomArbitrary(3, 5) },
      () => {
        const x_start = 0;
        const y_start = getRandomArbitrary(0, this.maxHeight - 1);

        return [
          [x_start, y_start],
          [this.maxWidth - 1, y_start],
        ];
      }
    );
    randomHorizLines.forEach((line) => {
      for (let i = line[0][0]; i <= line[1][0]; i++) {
        const child = this._findChild(i * this.maxHeight + line[1][1] + 1);
        child.classList.remove("tileW");
        map[i][line[1][1]] = "floor";
      }
    });

    // Размещение вертикальных линий
    const randomVertLines = Array.from(
      { length: getRandomArbitrary(3, 5) },
      () => {
        const y_start = 0;
        const x_start = getRandomArbitrary(0, this.maxWidth - 1);

        return [
          [x_start, y_start],
          [x_start, this.maxHeight - 1],
        ];
      }
    );
    randomVertLines.forEach((line) => {
      for (let i = line[0][1]; i <= line[1][1]; i++) {
        const child = this._findChild(line[0][0] * this.maxHeight + i + 1);

        child.classList.remove("tileW");
        map[line[0][0]][i] = "floor";
      }
    });

    // Выделение пустового пространства
    const emptyMap = map.reduce((accum, el, ind1) => {
      el.forEach((el2, ind2) => {
        if (el2 === "floor") {
          accum.push([ind1, ind2]);
        }
      });
      return accum;
    }, []);

    // Размещение зелья
    for (let p = 0; p < this.poisonCount; p++) {
      const boxIndex = getRandomArbitrary(0, emptyMap.length - 1);
      const poisonIndex = emptyMap[boxIndex];
      map[poisonIndex[0]][poisonIndex[1]] = new Poison(emptyMap[boxIndex]);
      emptyMap.splice(boxIndex, 1);
    }

    //Размещение мечей
    for (let p = 0; p < this.swordCount; p++) {
      const boxIndex = getRandomArbitrary(0, emptyMap.length - 1);
      const swordIndex = emptyMap[boxIndex];
      map[swordIndex[0]][swordIndex[1]] = new Sword(emptyMap[boxIndex]);
      emptyMap.splice(boxIndex, 1);
    }

    //Размещение противников
    const enemyArr = [];
    for (let p = 0; p < this.enemyCount; p++) {
      const boxIndex = getRandomArbitrary(0, emptyMap.length - 1);
      const enemyIndex = emptyMap[boxIndex];
      const enemy = new Enemy(emptyMap[boxIndex]);
      enemyArr.push(enemy);
      map[enemyIndex[0]][enemyIndex[1]] = enemy;
      emptyMap.splice(boxIndex, 1);
    }

    // Размещение героя
    const boxIndex = getRandomArbitrary(0, emptyMap.length - 1);
    const heroIndex = emptyMap[boxIndex];
    map[heroIndex[0]][heroIndex[1]] = new Hero(emptyMap[boxIndex]);
    emptyMap.splice(boxIndex, 1);

    store.set("enemyArr", enemyArr);
    store.set("gameMap", map);
    store.set("emptyMap", emptyMap);
  }

  start() {
    this._renderMap();
  }
}

export default Game;
