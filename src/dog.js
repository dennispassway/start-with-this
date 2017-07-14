// @flow

export default class Dog {
  name: string;

  constructor(name: string) {
    this.name = name
  }

  bark() {
    return `Wah, wah I am ${this.name}`
  }
}
