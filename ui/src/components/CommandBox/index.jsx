import styles from './index.module.css';
import { ReactSVG } from 'react-svg';
import CommandSvg from './command.svg';
import { useState } from 'react';
import translation from '../../i18n/zh-cn.json';

export function CommandBox() {
    const [value, setValue] = useState('');

    return <div className={styles.CommandBox}>
        <ReactSVG className={styles.CommandIcon} src={CommandSvg}/>
        <input type="text" 
            className={styles.CommandInput} 
            value={value} onChange={(e) => setValue(e.target.value)} 
            autoFocus={true}
            placeholder={translation['place-holder']}
            onBlur={(e) => e.target.focus()}
        />
    </div>;
}

