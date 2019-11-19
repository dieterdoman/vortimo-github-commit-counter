import React from 'react';
import Form from "./form/Form";

const Container = (props) => {
    const onSubmit = (url, timespan) => {
        console.log(url, timespan);
    };

    return (
        <Form onSubmit={onSubmit}/>
    );
};

export default Container;