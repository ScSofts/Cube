const electron = require('electron')
const { contextBridge } = electron;

contextBridge.exposeInMainWorld('cube', {
  ipc: electron.ipcRenderer,
  /**
   * 
   * @param {boolean} click_through 
   * @param {import('electron').IgnoreMouseEventsOptions | undefined} options
   */
  click_through(click_through, options){
    electron.ipcRenderer.send('click-through', click_through, options);
  },

  close(){
    electron.ipcRenderer.send('close');
  },
})