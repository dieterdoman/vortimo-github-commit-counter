import React, { useState } from 'react';
import TimespanSelect from '../timespanSelect/TimespanSelect';

const Form = (props) => {
    const [url, setUrl] = useState("");
    const [timespan, setTimeSpan] = useState("hours");

    const onChangeTimespan = (selectedOption) => {
        setTimeSpan(selectedOption.value);
    };

    const onSubmit = (event) => {
        props.onSubmit(url, timespan);
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit}>
            <label>
                Repo URL:
                <input type="text" value={url} onChange={(event) => setUrl(event.target.value)}/>
            </label>
            <label>Timespan</label>
            <TimespanSelect value={timespan} onChange={onChangeTimespan}/>
            <input type="submit" value="Update stats"/>
        </form>
    );
};

export default Form;