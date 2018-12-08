const modelMap = require('./models/map');

class Patch {
  constructor(data) {
    this.meta = null;
    this.data = {};
    this.push(data);
  }

  push(patch) {
    if (patch.included) {
      patch.included.forEach(this.pushObject.bind(this));
    }

    this.meta = this.pushObject(patch.data);
  }

  pushObject(data) {
    if (!modelMap[data.type]) {
      return null;
    }

    this.data[data.type] = this.data[data.type] || {};

    return this.data[data.type][data.id] = new (modelMap[data.type])(data, this);
  }

  getById(type, id) {
    return this.data[type] && this.data[type][id];
  }

  getAll(type) {
    return this.data[type];
  }
}

module.exports = Patch;
