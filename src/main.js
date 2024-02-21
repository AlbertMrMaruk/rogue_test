/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/index.js":
/*!*********************!*\
  !*** ./js/index.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_Game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Game.js */ \"./js/modules/Game.js\");\n\nconst game = new _modules_Game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngame.start();\n\n//# sourceURL=webpack://rogue/./js/index.js?");

/***/ }),

/***/ "./js/modules/Box.js":
/*!***************************!*\
  !*** ./js/modules/Box.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Box {\n  _parentElement;\n  maxWidth = 21;\n  maxHeight = 13;\n  constructor() {\n    this._parentElement = document.querySelector(\".field\");\n  }\n  _findChild(query) {\n    return this._parentElement.querySelector(`.tile:nth-child(${query})`);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Box);\n\n//# sourceURL=webpack://rogue/./js/modules/Box.js?");

/***/ }),

/***/ "./js/modules/Game.js":
/*!****************************!*\
  !*** ./js/modules/Game.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store.js */ \"./js/store.js\");\n/* harmony import */ var _Box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Box.js */ \"./js/modules/Box.js\");\n/* harmony import */ var _utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getRandomArbitrary.js */ \"./js/utils/getRandomArbitrary.js\");\n/* harmony import */ var _blocks_Poison_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/Poison.js */ \"./js/modules/blocks/Poison.js\");\n/* harmony import */ var _blocks_Enemy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/Enemy.js */ \"./js/modules/blocks/Enemy.js\");\n/* harmony import */ var _blocks_Hero_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/Hero.js */ \"./js/modules/blocks/Hero.js\");\n/* harmony import */ var _blocks_Sword_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/Sword.js */ \"./js/modules/blocks/Sword.js\");\n\n\n\n\n\n\n\nclass Game extends _Box_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] {\n  poisonCount = 10;\n  swordCount = 2;\n  enemyCount = 10;\n  constructor() {\n    super();\n  }\n  _renderMap() {\n    const map = [];\n    for (let x = 0; x < this.maxWidth; x++) {\n      map[x] = [];\n      for (let y = 0; y < this.maxHeight; y++) {\n        const elem = document.createElement(\"div\");\n        elem.classList.add(\"tile\");\n        elem.classList.add(\"tileW\");\n        elem.style.left = `${x * 50}px`;\n        elem.style.top = `${y * 50}px`;\n        this._parentElement.appendChild(elem);\n        map[x][y] = \"wall\";\n      }\n    }\n    // Размещение комнат\n    const randomRooms = Array.from({\n      length: (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(5, 10)\n    }, () => {\n      const width = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(3, 5);\n      const height = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(3, 5);\n      const x_start = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(0, this.maxWidth - 1);\n      const x_end = x_start + width;\n      const y_start = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(0, this.maxHeight - 1);\n      const y_end = y_start + height;\n      return [[x_start, y_start], [x_end >= this.maxWidth ? this.maxWidth - 1 : x_end, y_end >= this.maxHeight ? this.maxHeight - 1 : y_end]];\n    });\n    randomRooms.forEach(room => {\n      for (let i = room[0][0]; i <= room[1][0]; i++) {\n        for (let j = room[0][1]; j <= room[1][1]; j++) {\n          const child = this._parentElement.querySelector(`.tile:nth-child(${i * this.maxHeight + j + 1})`);\n          child.classList.remove(\"tileW\");\n          map[i][j] = \"floor\";\n        }\n      }\n    });\n    // Размещение горизонтальных линий\n    const randomHorizLines = Array.from({\n      length: (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(3, 5)\n    }, () => {\n      const x_start = 0;\n      const y_start = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(0, this.maxHeight - 1);\n      return [[x_start, y_start], [this.maxWidth - 1, y_start]];\n    });\n    randomHorizLines.forEach(line => {\n      for (let i = line[0][0]; i <= line[1][0]; i++) {\n        const child = this._findChild(i * this.maxHeight + line[1][1] + 1);\n        child.classList.remove(\"tileW\");\n        map[i][line[1][1]] = \"floor\";\n      }\n    });\n\n    // Размещение вертикальных линий\n    const randomVertLines = Array.from({\n      length: (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(3, 5)\n    }, () => {\n      const y_start = 0;\n      const x_start = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(0, this.maxWidth - 1);\n      return [[x_start, y_start], [x_start, this.maxHeight - 1]];\n    });\n    randomVertLines.forEach(line => {\n      for (let i = line[0][1]; i <= line[1][1]; i++) {\n        const child = this._findChild(line[0][0] * this.maxHeight + i + 1);\n        child.classList.remove(\"tileW\");\n        map[line[0][0]][i] = \"floor\";\n      }\n    });\n\n    // Выделение пустового пространства\n    const emptyMap = map.reduce((accum, el, ind1) => {\n      el.forEach((el2, ind2) => {\n        if (el2 === \"floor\") {\n          accum.push([ind1, ind2]);\n        }\n      });\n      return accum;\n    }, []);\n\n    // Размещение зелья\n    for (let p = 0; p < this.poisonCount; p++) {\n      const boxIndex = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(0, emptyMap.length - 1);\n      const poisonIndex = emptyMap[boxIndex];\n      map[poisonIndex[0]][poisonIndex[1]] = new _blocks_Poison_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](emptyMap[boxIndex]);\n      emptyMap.splice(boxIndex, 1);\n    }\n\n    //Размещение мечей\n    for (let p = 0; p < this.swordCount; p++) {\n      const boxIndex = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(0, emptyMap.length - 1);\n      const swordIndex = emptyMap[boxIndex];\n      map[swordIndex[0]][swordIndex[1]] = new _blocks_Sword_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"](emptyMap[boxIndex]);\n      emptyMap.splice(boxIndex, 1);\n    }\n\n    //Размещение противников\n    const enemyArr = [];\n    for (let p = 0; p < this.enemyCount; p++) {\n      const boxIndex = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(0, emptyMap.length - 1);\n      const enemyIndex = emptyMap[boxIndex];\n      const enemy = new _blocks_Enemy_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"](emptyMap[boxIndex]);\n      enemyArr.push(enemy);\n      map[enemyIndex[0]][enemyIndex[1]] = enemy;\n      emptyMap.splice(boxIndex, 1);\n    }\n\n    // Размещение героя\n    const boxIndex = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(0, emptyMap.length - 1);\n    const heroIndex = emptyMap[boxIndex];\n    map[heroIndex[0]][heroIndex[1]] = new _blocks_Hero_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](emptyMap[boxIndex]);\n    emptyMap.splice(boxIndex, 1);\n    _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"enemyArr\", enemyArr);\n    _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"gameMap\", map);\n    _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"emptyMap\", emptyMap);\n  }\n  start() {\n    this._renderMap();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);\n\n//# sourceURL=webpack://rogue/./js/modules/Game.js?");

/***/ }),

/***/ "./js/modules/Item.js":
/*!****************************!*\
  !*** ./js/modules/Item.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Box_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Box.js */ \"./js/modules/Box.js\");\n\nclass Item extends _Box_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  _coords = [];\n  constructor(coords, className) {\n    super();\n    this.className = className;\n    this._coords = coords;\n  }\n  getCoords() {\n    return this._coords;\n  }\n  _render() {\n    const child = this._findChild(this._coords[0] * this.maxHeight + this._coords[1] + 1);\n    child.classList.add(this.className);\n    this._child = child;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);\n\n//# sourceURL=webpack://rogue/./js/modules/Item.js?");

/***/ }),

/***/ "./js/modules/Player.js":
/*!******************************!*\
  !*** ./js/modules/Player.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store.js */ \"./js/store.js\");\n/* harmony import */ var _utils_clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/clone.js */ \"./js/utils/clone.js\");\n/* harmony import */ var _Box_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Box.js */ \"./js/modules/Box.js\");\n\n\n\nclass Player extends _Box_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  health = 100;\n  attackPower = 20;\n  constructor(coords, className) {\n    super();\n    this.className = className;\n    this._coords = coords;\n  }\n  damageHealth(damage) {\n    this.health -= damage;\n    const child = this._findChild(this._coords[0] * this.maxHeight + this._coords[1] + 1);\n    child.querySelector(\".health\").style.width = `${this.health}%`;\n  }\n  changeCoords(gameMap, coords) {\n    const child = this._findChild(this._coords[0] * this.maxHeight + this._coords[1] + 1);\n    child.classList = \"tile\";\n    child.querySelector(\".health\").remove();\n    const newChild = this._findChild(coords[0] * this.maxHeight + coords[1] + 1);\n    newChild.classList = `tile ${this.className} ${this.side === \"left\" ? \"mirrorImg\" : \"\"}`;\n    newChild.insertAdjacentHTML(\"afterbegin\", ` <div class=\"health\" style=\"width: ${this.health}%\">\n    </div>`);\n    gameMap[coords[0]][coords[1]] = gameMap[this._coords[0]][this._coords[1]];\n    gameMap[this._coords[0]][this._coords[1]] = \"floor\";\n    this._coords = coords;\n    return gameMap;\n  }\n  checkAttack(coords) {\n    const state = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState();\n    const gameMap = (0,_utils_clone_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.gameMap);\n    const enemyName = this.name === \"Enemy\" ? \"Hero\" : \"Enemy\";\n    if (gameMap[coords[0]]?.[coords[1]]?.name === enemyName) {\n      if (gameMap[coords[0]][coords[1]].health - this.attackPower <= 0) {\n        const enemy = this._findChild(coords[0] * this.maxHeight + coords[1] + 1);\n        enemy.classList = \"tile\";\n        enemy.querySelector(\".health\").remove();\n        gameMap[coords[0]][coords[1]].kill();\n        gameMap[coords[0]][coords[1]] = \"floor\";\n      } else {\n        gameMap[coords[0]][coords[1]].damageHealth(this.attackPower);\n      }\n      _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"gameMap\", gameMap);\n    }\n  }\n  attack() {\n    this.checkAttack([this._coords[0] + 1, this._coords[1]]);\n    this.checkAttack([this._coords[0] + 1, this._coords[1] - 1]);\n    this.checkAttack([this._coords[0] + 1, this._coords[1] + 1]);\n    this.checkAttack([this._coords[0], this._coords[1] - 1]);\n    this.checkAttack([this._coords[0], this._coords[1] + 1]);\n    this.checkAttack([this._coords[0] - 1, this._coords[1]]);\n    this.checkAttack([this._coords[0] - 1, this._coords[1] - 1]);\n    this.checkAttack([this._coords[0] - 1, this._coords[1] + 1]);\n  }\n  goUp() {\n    this.setCoords([this._coords[0], this._coords[1] - 1]);\n  }\n  goDown() {\n    this.setCoords([this._coords[0], this._coords[1] + 1]);\n  }\n  goLeft() {\n    this.side = \"left\";\n    this.setCoords([this._coords[0] - 1, this._coords[1]]);\n  }\n  goRight() {\n    this.side = \"right\";\n    this.setCoords([this._coords[0] + 1, this._coords[1]], \"right\");\n  }\n  _render() {\n    const child = this._findChild(this._coords[0] * this.maxHeight + this._coords[1] + 1);\n    child.classList.add(this.className);\n    const elem = document.createElement(\"div\");\n    elem.classList.add(\"health\");\n    child.insertAdjacentHTML(\"afterbegin\", `\n    <div class=\"health\" style=\"width: ${this.health}%\">\n    </div>\n    `);\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://rogue/./js/modules/Player.js?");

/***/ }),

/***/ "./js/modules/blocks/Enemy.js":
/*!************************************!*\
  !*** ./js/modules/blocks/Enemy.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store.js */ \"./js/store.js\");\n/* harmony import */ var _utils_clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/clone.js */ \"./js/utils/clone.js\");\n/* harmony import */ var _utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/getRandomArbitrary.js */ \"./js/utils/getRandomArbitrary.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Player.js */ \"./js/modules/Player.js\");\n\n\n\n\nclass Enemy extends _Player_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"] {\n  name = \"Enemy\";\n  constructor(coords) {\n    super(coords, \"tileE\");\n    this.render();\n  }\n  setCoords(coords) {\n    const state = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState();\n    const gameMap = (0,_utils_clone_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.gameMap);\n    if (gameMap?.[coords[0]]?.[coords[1]] === \"floor\") {\n      _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"gameMap\", this.changeCoords(gameMap, coords));\n    }\n  }\n  timeoutMove() {\n    this.interval = setInterval(() => {\n      const side = (0,_utils_getRandomArbitrary_js__WEBPACK_IMPORTED_MODULE_2__.getRandomArbitrary)(1, 4);\n      switch (side) {\n        case 1:\n          this.goRight();\n          break;\n        case 2:\n          this.goDown();\n          break;\n        case 3:\n          this.goLeft();\n          break;\n        case 4:\n          this.goUp();\n          break;\n      }\n      this.attack();\n    }, 1000);\n  }\n  kill() {\n    const state = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState();\n    const killedEnemyCount = (state.killedEnemyCount ?? 0) + 1;\n    clearInterval(this.interval);\n    _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"killedEnemyCount\", killedEnemyCount);\n    if (killedEnemyCount === state.enemyArr.length) {\n      document.querySelector(\"body\").replaceChildren();\n      document.querySelector(\"body\").insertAdjacentHTML(\"afterbegin\", \"<h1 style='color: green'>Игра закончена! Вы выиграли!</h1>\");\n    }\n  }\n  render() {\n    this._render();\n    this.timeoutMove();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Enemy);\n\n//# sourceURL=webpack://rogue/./js/modules/blocks/Enemy.js?");

/***/ }),

/***/ "./js/modules/blocks/Hero.js":
/*!***********************************!*\
  !*** ./js/modules/blocks/Hero.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../store.js */ \"./js/store.js\");\n/* harmony import */ var _utils_clone_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/clone.js */ \"./js/utils/clone.js\");\n/* harmony import */ var _Player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Player.js */ \"./js/modules/Player.js\");\n\n\n\nclass Hero extends _Player_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"] {\n  name = \"Hero\";\n  constructor(coords) {\n    super(coords, \"tileP\");\n    this.render();\n  }\n  setCoords(coords) {\n    const state = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState();\n    const gameMap = (0,_utils_clone_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(state.gameMap);\n    if (gameMap?.[coords[0]]?.[coords[1]]?.name === \"Poison\") {\n      if (this.health !== 100) {\n        this.health += 10;\n      }\n    }\n    if (gameMap?.[coords[0]]?.[coords[1]]?.name === \"Sword\") {\n      this.attackPower += 10;\n    }\n    if (gameMap?.[coords[0]]?.[coords[1]] === \"floor\" || gameMap?.[coords[0]]?.[coords[1]]?.name === \"Poison\" || gameMap?.[coords[0]]?.[coords[1]]?.name === \"Sword\") {\n      _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].set(\"gameMap\", this.changeCoords(gameMap, coords));\n    }\n  }\n  onMove(e) {\n    switch (e.code) {\n      case \"KeyW\":\n        this.goUp();\n        break;\n      case \"KeyD\":\n        this.goRight();\n        break;\n      case \"KeyA\":\n        this.goLeft();\n        break;\n      case \"KeyS\":\n        this.goDown();\n        break;\n      case \"Space\":\n        this.attack();\n    }\n  }\n  addEvents() {\n    document.onkeydown = this.onMove.bind(this);\n  }\n  clearEvents() {\n    document.onkeydown = null;\n  }\n  kill() {\n    setTimeout(() => {\n      this.clearEvents();\n      const state = _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getState();\n      state.enemyArr.forEach(enemy => enemy.kill());\n      _store_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].clear();\n      document.querySelector(\"body\").replaceChildren();\n      document.querySelector(\"body\").insertAdjacentHTML(\"afterbegin\", \"<h1 style='color: red'>Игра закончена! Вы проиграли(</h1>\");\n    }, 500);\n  }\n  render() {\n    this._render();\n    this.addEvents();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);\n\n//# sourceURL=webpack://rogue/./js/modules/blocks/Hero.js?");

/***/ }),

/***/ "./js/modules/blocks/Poison.js":
/*!*************************************!*\
  !*** ./js/modules/blocks/Poison.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Item.js */ \"./js/modules/Item.js\");\n\nclass Poison extends _Item_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  name = \"Poison\";\n  constructor(coords) {\n    super(coords, \"tileHP\");\n    this.render();\n  }\n  render() {\n    this._render();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Poison);\n\n//# sourceURL=webpack://rogue/./js/modules/blocks/Poison.js?");

/***/ }),

/***/ "./js/modules/blocks/Sword.js":
/*!************************************!*\
  !*** ./js/modules/blocks/Sword.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Item.js */ \"./js/modules/Item.js\");\n\nclass Sword extends _Item_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  name = \"Sword\";\n  constructor(coords) {\n    super(coords, \"tileSW\");\n    this.render();\n  }\n  render() {\n    this._render();\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sword);\n\n//# sourceURL=webpack://rogue/./js/modules/blocks/Sword.js?");

/***/ }),

/***/ "./js/store.js":
/*!*********************!*\
  !*** ./js/store.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Store {\n  state = {};\n  getState() {\n    return this.state;\n  }\n  clear() {\n    this.state = {};\n  }\n  set(path, value) {\n    this.state[path] = value;\n    return this.state;\n    // sta(this.state, path, value);\n  }\n}\nconst store = new Store();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (store);\n\n//# sourceURL=webpack://rogue/./js/store.js?");

/***/ }),

/***/ "./js/utils/clone.js":
/*!***************************!*\
  !*** ./js/utils/clone.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst clone = items => items.map(item => Array.isArray(item) ? clone(item) : item);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clone);\n\n//# sourceURL=webpack://rogue/./js/utils/clone.js?");

/***/ }),

/***/ "./js/utils/getRandomArbitrary.js":
/*!****************************************!*\
  !*** ./js/utils/getRandomArbitrary.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandomArbitrary: () => (/* binding */ getRandomArbitrary)\n/* harmony export */ });\nfunction getRandomArbitrary(min, max) {\n  return Math.floor(Math.random() * (max - min + 1) + min);\n}\n\n//# sourceURL=webpack://rogue/./js/utils/getRandomArbitrary.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/index.js");
/******/ 	
/******/ })()
;