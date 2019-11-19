import React from 'react';
import styles from './Table.module.css';

const Table = (props) => {
    return (
        <div className={styles.Table}>
            <div className={styles.TableHeading}>
                <div className={styles.TableCell}>Username</div>
                <div className={styles.TableCell}>Count</div>
            </div>
            {
                Object.keys(props.data).map((username) => {
                    return (
                        <div className={styles.TableRow} key={username}>
                            <div className={styles.TableCell}>{username}</div>
                            <div className={styles.TableCell}>{props.data[username]}</div>
                        </div>
                    );
                })
            }
        </div>
    );
};

export default Table;