const { app, BrowserWindow, globalShortcut } = require('electron');
const path = require('path');
const url = require('url');

let mainWindow;

function createWindow() {
    const mainWindowConfig = {
        width: 1000,
        height: 700,
        center: true,
        title: 'MyElectronApp',
        webPreferences: {
            nodeIntegration: false,
        },
    };

    const mainWindowUrl = url.format({
        pathname: path.join(__dirname, 'www', 'index.html'),
        protocol: 'file:',
        slashes: true,
    });

    mainWindow = new BrowserWindow(mainWindowConfig);
    mainWindow.loadURL(mainWindowUrl);
    globalShortcut.register('CommandOrControl+Shift+D', () => {
        mainWindow.focus();
        mainWindow.webContents.toggleDevTools();
    });

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('will-quit', () => {
    globalShortcut.unregisterAll();
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});
