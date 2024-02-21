class Store {
  state = {};

  getState() {
    return this.state;
  }

  clear() {
    this.state = {};
  }

  set(path, value) {
    this.state[path] = value;
    return this.state;
    // sta(this.state, path, value);
  }
}

const store = new Store();

export default store;
