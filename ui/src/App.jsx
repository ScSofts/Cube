import { CommandBox } from "./components";
import {useEffect, useState} from 'react';
import './ipc';
import ResultBox from "./components/ResultBox/index.tsx";

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


    const [showResult, setShowResult] = useState(false);
    /**
     * @type {import("./components/ResultBox/search-result.ts").SearchResult}
     */
    const fakeResult = [
        {
            icon: "https://www.baidu.com/favicon.ico",
            title: "百度搜索",
            description: "百度一下，你就知道",
        },
        {
            icon: "https://www.baidu.com/favicon.ico",
            title: "百度搜索",
            description: "百度两下，你就不知道",
        }
    ];

    return (
        <>
            <CommandBox></CommandBox>
            <ResultBox show={showResult} results={fakeResult}></ResultBox>
        </>
    );
}
