// * Dummy Model Class
// ! This is a dummy model Class, You can ignore this file for now.
class DummyModel {
  /**  @type {{name: string; image: string}[]} */
  static data = [];

  constructor(name, image) {
    this.id = Math.random().toString(36).slice(2);
    this.name = name;
    this.image = image;

    DummyModel.data.push(this);
  }

  static async findAll() {
    return DummyModel.data;
  }

  static async findOne(id) {
    return DummyModel.data.find((d) => d.id === id);
  }

  static async create(name, image) {
    return new DummyModel(name, image);
  }

  static async update(id, name, image) {
    const dummy = DummyModel.data.find((d) => d.id === id);
    dummy.name = name;
    dummy.image = image;

    return dummy;
  }

  static async delete(id) {
    const dummy = DummyModel.data.find((d) => d.id === id);
    DummyModel.data = DummyModel.data.filter((d) => d.id !== id);

    return dummy;
  }
}

module.exports = DummyModel;
