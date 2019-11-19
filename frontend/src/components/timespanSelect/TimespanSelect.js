import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'hours', label: 'Last 24 hours' },
    { value: 'week', label: 'Last week' },
    { value: 'year', label: 'Last year' }
];

const TimespanSelect = (props) => {
    const selectedOption = options.find(option => option.value === props.value);
    return (
        <Select options={options} value={selectedOption} onChange={option => props.onChange(option)}/>
    );
};

export default TimespanSelect;