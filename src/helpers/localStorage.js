class LocalStorage {
  static get = (name) => {
    return JSON.parse(localStorage.getItem(name));
  };

  static set = (name, data) => {
    localStorage.setItem(name, JSON.stringify(data));
  };
}

const PRODUCTS = "PRODUCTS";

export { LocalStorage, PRODUCTS };
