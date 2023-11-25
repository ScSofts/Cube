interface Cube{
    ipc: import('electron').IpcRenderer
    click_through(click_through: boolean, options?: import('electron').IgnoreMouseEventsOptions): void
    close(): void
}


interface Window{
        cube: Cube;
}
