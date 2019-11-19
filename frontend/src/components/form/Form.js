import React, { useState } from 'react';
import TimespanSelect from '../timespanSelect/TimespanSelect';
import styles from './Form.module.css';

const Form = (props) => {
    const [url, setUrl] = useState("https://github.com/facebook/react");
    const [timespan, setTimeSpan] = useState("hours");

    const onChangeTimespan = (selectedOption) => {
        setTimeSpan(selectedOption.value);
    };

    const onSubmit = (event) => {
        props.onSubmit(url, timespan);
        event.preventDefault();
    };

    return (
        <div className={styles.Container}>
            <form onSubmit={onSubmit}>
                <div className={styles.Input}>
                    <label className={styles.Label}>
                        Repo URL:
                    </label>
                    <input className={styles.InputElement} type="text" value={url} onChange={(event) => setUrl(event.target.value)}/>
                </div>
                <div className={styles.Input}>
                    <label className={styles.Label}>Timespan</label>
                    <TimespanSelect value={timespan} onChange={onChangeTimespan}/>
                </div>
                <input className={styles.Button} type="submit" value="Update stats"/>
            </form>
            {props.children}
        </div>
    );
};

export default Form;