import React from 'react';
import styles from './index.module.css';
import { SearchResult } from './search-result';


interface ResultBoxProps {
    show: boolean,
    results: SearchResult[]
}

export default function ResultBox({ show, results } : ResultBoxProps) {
    if(show){
        return <div className={styles.ResultBox}>
            {
                results.map((result, index) => {
                    return <div className={styles.SearchResult} key={index}>
                        <div className={styles.SearchResultIcon}>
                            <img src={result.icon} alt='图标不可读取'></img>
                        </div>
                        <div className={styles.SearchResultContent}>
                            <div>{result.title}</div>
                            <div className={styles.SearchResultContentDescription}>{result.description}</div>
                        </div>
                    </div>
                })
            }
        </div>;
    } else {
        return <></>;
    }
}