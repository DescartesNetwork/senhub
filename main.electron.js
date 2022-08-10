const { app, screen, session, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const minimatch = require('minimatch')
const loadFile = require('./serve.electron')({ directory: 'build' })

const createWindow = () => {
  const {
    workAreaSize: { width, height },
  } = screen.getPrimaryDisplay()
  const win = new BrowserWindow({
    width,
    height,
    webPreferences: {
      nodeIntegration: false,
    },
  })
  if (isDev) win.webContents.openDevTools()
  loadFile(win)
}

const createMiddleware = () => {
  session.defaultSession.webRequest.onBeforeSendHeaders(
    ({ url, requestHeaders }, callback) => {
      if (
        minimatch(url, '*://*.solana-mainnet.quiknode.pro/*') ||
        minimatch(url, '*://api.sentre.io/**')
      )
        requestHeaders['Origin'] = 'https://hub.sentre.io'
      return callback({ requestHeaders })
    },
  )
  session.defaultSession.webRequest.onHeadersReceived(
    ({ responseHeaders }, callback) => {
      const disabledHeaders = ['X-Frame-Options', 'x-frame-options']
      disabledHeaders.forEach((header) => {
        if (responseHeaders[header]) delete responseHeaders[header]
      })
      const modifiedHeaders = [
        'Access-Control-Allow-Origin',
        'access-control-allow-origin',
      ]
      modifiedHeaders.forEach((header) => {
        if (responseHeaders[header]) responseHeaders[header] = 'app://-'
      })
      return callback({ responseHeaders })
    },
  )
}

app.whenReady().then(() => {
  // Manipulate the http headers to simulate hub.sentre.io origin
  createMiddleware()
  // Define the window
  createWindow()
})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
