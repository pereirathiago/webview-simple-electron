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
    globalShortcut.register('F12', toggleDevTools)
    globalShortcut.register('F11', fullScreen)
}

function fullScreen() {
    win.isSimpleFullScreen() ? win.setSimpleFullScreen(false) : win.setSimpleFullScreen(true);
  }

app.whenReady()
.then(createWindow)
.then(createShortcuts)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
