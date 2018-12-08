const Model = require('../Model');

class Techtree extends Model {
  get name() {
    return this.data.attributes.name;
  }

  get handbookUrl() {
    return this.data.attributes.handbookUrl;
  }

  get iconUrl() {
    return this.data.attributes.iconUrl;
  }
}

module.exports = Techtree;
