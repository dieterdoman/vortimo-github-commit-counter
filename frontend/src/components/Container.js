import React, {Fragment, useState} from 'react';
import Form from './form/Form';
import Table from './table/Table';
import axios from 'axios';

const URL = 'http://localhost:5000/commitcounts';

const Container = (props) => {
    const [commitCount, setCommitCount] = useState(undefined);

    const onSubmit = (url, timespan) => {
        console.log(url);
        axios.get(`${URL}?interval=${timespan}&url=${url}`).then(response => {
            setCommitCount(response.data.commitCounts);
        });
    };

    return (
        <Fragment>
            <Form onSubmit={onSubmit}>
                { commitCount &&
                    <Table data={commitCount}/>
                }
            </Form>
        </Fragment>
    );
};

export default Container;