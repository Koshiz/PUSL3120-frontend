const APPLICATION = require('spectron').Application;
const ELECTRON_PATH = require('electron'); 
const PATH = require('path');

export default function setup(): void {
  beforeEach(async function() {
    this.app = new APPLICATION({
      
      path: ELECTRON_PATH,
     
      args: [PATH.join(__dirname, '../app/main.js'), PATH.join(__dirname, '../app/package.json')],
      webdriverOptions: {}
    });

    await this.app.start();
  });

  afterEach(async function() {
    if (this.app && this.app.isRunning()) {
      await this.app.stop();
    }
  });
}
