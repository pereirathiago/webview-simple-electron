const { app, BrowserWindow, globalShortcut } = require('electron')
const config = require('./config')

let win;

function createWindow () {
    win = new BrowserWindow({
    width: 600,
    height: 400,
    // frame: false,
    titleBarStyle: 'customButtonsOnHover',
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('config.url')
}

function toggleDevTools() {
    win.webContents.toggleDevTools()
}

function createShortcuts() {
    globalShortcut.register('CmdOrCtrl+J', toggleDevTools)
    globalShortcut.register('F11', fullScreen)
}

function fullScreen() {
    win.isSimpleFullScreen() ? win.setSimpleFullScreen(false) : win.setSimpleFullScreen(true);
  }

app.whenReady()
.then(createWindow)
.then(createShortcuts)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app. uit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})