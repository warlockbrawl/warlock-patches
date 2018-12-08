class Model {
  constructor(data = {}, patch = null) {
    this.data = data;
    this.patch = patch;
  }

  id() {
    return this.data.id;
  }

  attribute(attribute) {
    return this.data.attributes[attribute];
  }

  one(name) {
    if (this.data.relationships) {
      const relationship = this.data.relationships[name];

      if (relationship) {
        return this.patch.getById(relationship.type, relationship.id);
      }
    }

    return null;
  }

  many(name) {
    if (this.data.relationships) {
      const relationship = this.data.relationships[name];

      if (relationship) {
        return relationship.map(identifier => this.patch.getById(identifier.type, identifier.id));
      }
    }

    return [];
  }
}

module.exports = Model;
