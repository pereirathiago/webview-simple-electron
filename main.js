const { app, BrowserWindow, globalShortcut } = require('electron')
const config = require('./config')

const path = require('path')
const os = require('os')
    
let win;

function createWindow () {
    win = new BrowserWindow({
    width: 600,
    height: 400,
    titleBarStyle: 'hidden',
    // frame: false,
    alwaysOnTop: true,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.setAutoHideMenuBar(true)
  win.loadURL(config.url)

  win.addDevToolsExtension(
    path.join(os.homedir(), '%LOCALAPPDATA%\Google\Chrome\User Data\Default\Extensions\cjpalhdlnbpafiamejdnhcphjbkeiag\1.30.6')
 )
}

function toggleDevTools() {
    win.webContents.toggleDevTools()
}

function createShortcuts() {
    globalShortcut.register('F12', toggleDevTools)
    globalShortcut.register('F11', fullscreen)
}

app.whenReady()
.then(createWindow)
.then(createShortcuts)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
