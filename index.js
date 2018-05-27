const {app, BrowserWindow} = require('electron');

let win = null;

app.on('ready', function() {

    win = new BrowserWindow({width: 1000, height: 600});

    win.loadURL('http://localhost:8080');

    win.on('closed', function() {
        win = null;
    });
});

app.on('activate', () => {
    if(win === null) {
        createWindow();
    }
});

app.on('window-all-closed', function() {
    if(process.platform != 'darwin') {
        app.quit();
    }
});