import React from 'react';

const Table = (props) => {
    return (
        <div>
            <div>
                <div>Username</div>
                <div>Count</div>
            </div>
            {
                Object.keys(props.data).map((username) => {
                    return (
                        <div key={username}>
                            <div>{username}</div>
                            <div>{props.data[username]}</div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Table;