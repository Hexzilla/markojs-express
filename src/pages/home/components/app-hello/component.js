const custIntelAxios = require('../../../../axios');

module.exports = class {
  onCreate() {
    this.state = {
      count: 0,
      username: ''
    }
  }

  onMount() {
    console.log("Mounted in the browser!");
  }

  increment() {
    this.state.count++;
  }

  handleUsername () {
    this.state.username = this.getEl('username').value;
  }

  submit() {
    console.log(this.state.username)
    custIntelAxios
      .updateUsername(this.state.username)
      .then(({ data }) => console.log("Result", data))
  }
}
