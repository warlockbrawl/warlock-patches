const Model = require('../Model');

class Patch extends Model {
  get name() {
    return this.data.attributes.name;
  }

  get author() {
    return this.data.attributes.author;
  }

  get releasedAt() {
    return new Date(this.data.attributes.releasedAt);
  }

  get changelogUrl() {
    return this.data.attributes.changelogUrl;
  }
}

module.exports = Patch;
