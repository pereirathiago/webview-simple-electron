const { app, BrowserWindow } = require('electron')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    altura: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  ganham. oadFile('index.html')
  win.webContents.openDevTools()
}

aplicativo. henReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app. uit()
  }
})

app.on('activate', () => {
  if (BrowserWindow. etAllWindows().length === 0) {
    createWindow()
  }
})
