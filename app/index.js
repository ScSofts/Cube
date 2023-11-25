const { app, BrowserWindow, ipcMain, globalShortcut } = require('electron');

app.whenReady().then(main);

async function main() {
    const { ConfigManager } = require('./config/config');

    let window_config = new ConfigManager('window_settings', false);
    const window = new BrowserWindow({
        transparent: true,
        frame: false,
        width: 600,
        height: 480,
        alwaysOnTop: true,
        webPreferences: {
            preload: `${__dirname}/preload.js`,
            sandbox: false,
        },
        resizable: false,
        titleBarStyle: 'customButtonsOnHover',
    });

    window.loadURL(process.env.PRODUCTION ? `file://${__dirname}/front_end/index.html` : 'http://localhost:3000');
    window.on('ready-to-show', () => {
        if (!window_config.get('position')) {
            window_config.set('position', window.getPosition());
        } else {
            window.setPosition(...window_config.get('position'));
        }
        window.show();
        window.focus();
        window.webContents.openDevTools();

        globalShortcut.register('Escape', () => {
            window.close();
        });
    });

    window.on('move', () => {
        window_config.set('position', window.getPosition());
    });


    window.on("closed", () => {
        app.quit();
    });

    window.on('blur', () => {
        window.focus();
        window.focusOnWebView();
    });


    ipcMain.addListener('click-through', (event, ignore, options) => {
        const win = BrowserWindow.fromWebContents(event.sender)
        win.setIgnoreMouseEvents(ignore, options)
    });

    ipcMain.addListener('close', () => {
        window.close();
    })

    app.on('quit', () => {
        window_config.save();
    })




}