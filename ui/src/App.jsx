import { CommandBox } from "./components";
import {useEffect} from 'react';
import './ipc';

export default function App() {
    useEffect(() => {
        const el = document.querySelector("#transparent");
        el.addEventListener('mouseenter', () => {
            window.cube.click_through(true, { forward: true });
        })
        el.addEventListener('mouseleave', () => {
            window.cube.click_through(false);
        })
       
    });
    return (
        <>
            <CommandBox></CommandBox>
        </>
    );
}
