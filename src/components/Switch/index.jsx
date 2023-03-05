import { Switch as SwitchMUI, withStyles } from "@material-ui/core";
import React from 'react';

const PurpleSwitch = withStyles({
    switchBase: {
        color: '#969696',
        '&$checked': {
            color: '#7267d3',
        },
        '&$checked + $track': {
            backgroundColor: '#7267d3',
        },
    },
    checked: {},
    track: {},
})(SwitchMUI);

const Switch = (props) => {
    const { children, ...rest } = props;

    return (
        <PurpleSwitch {...rest} />
    )
}

export default Switch;