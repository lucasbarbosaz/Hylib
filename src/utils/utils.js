import { createTheme } from "@material-ui/core";
import React from "react";

export const loop = (component, size) => {
    let components = [];
    for (let i = 0; i < size; i++) {
        components.push(<React.Fragment key={i}>{component}</React.Fragment>);
    }
    return components;
}

export const MuiDarkTheme = createTheme ({
    palette: {
        type: "dark",
        primary: {
            main: '#7267d3',
            light: '#7267d3',
            dark: '#7267d3',
        },
    },
});

export const MuiLightTheme = createTheme ({
    palette: {
        type: "light",
    }
});

export const goTo = (event, history, link) => {
    event.preventDefault();

    history.push(link);
}

export const scrollToTop = () => {
    const body = document.querySelector('#root');

    body.scrollIntoView({
        behavior: 'smooth'
    }, 500)
}
export const shuffle = (array) => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

const arrDiff = ['second', 'minute', 'hour', 'day', 'month', 'year'];
export const diff = (date1, date2) => {
    let result = { seconds: null, minutes: null, hours: null, days: null, years: null };

    let seconds = null;
    let minutes = null;
    let hours = null;
    let days = null;
    let months = null;
    let years = null;

    // {
    //     label: 'second',
    //     value: 1000,
    // },
    // {
    //     label: 'minute',
    //     value: 1000 * 60,
    // },
    // {
    //     label: 'hour',
    //     value: 1000 * 60 * 60,
    // },
    // {
    //     label: 'day',
    //     value: 1000 * 60 * 60 * 24,
    // },
    // {
    //     label: 'year',
    //     value: 1000 * 60 * 60 * 24 * 365,
    // }

    const res = Math.abs(date1 - date2) / 1000;
    for (let obj of arrDiff) {
        if (obj === 'second') {
            seconds = res % 60;
        } else if (obj === 'minute') {
            minutes = Math.floor(res / 60) % 60;
        } else if (obj === 'hour') {
            hours = Math.floor(res / 3600) % 24;
        } else if (obj === 'day') {
            days = Math.floor(res / 86400) % 31;
        } else if (obj === 'month') {
            months = Math.floor(res / 2678400);
        } else if (obj === 'year') {
            years = Math.floor(res / (86400 * 365)) % 1;
        }
    }
    result = {
        seconds,
        minutes,
        hours,
        days,
        months,
        years
    }

    if (result.minutes === 0 && result.hours === 0 && result.days === 0 && result.years === 0) {
        return `${result.seconds} segundo${result.seconds !== 1 ? 's' : ''} atrás`;

    } else if (result.hours === 0 && result.days === 0 && result.years === 0) {
        return `${result.minutes} minuto${result.minutes !== 1 ? 's' : ''} atrás`;

    } else if (result.days === 0 && result.years === 0) {
        return `${result.hours} hora${result.hours !== 1 ? 's' : ''} atrás`;

    } else if (result.years === 0) {
        return `${result.days} dia${result.days !== 1 ? 's' : ''} atrás`;

    } else {
        return `${result.years} ano${result.years !== 1 ? 's' : ''} atrás`;

    }
}
export const subArray = (arr, inicio, fim) => {

    let arrTemp = [];

    for (let i = inicio; i <= fim; i++) {
        arrTemp.push(arr[i]);
    }

    return arrTemp;
}

export const isValidDate = (d) => {
    return d instanceof Date && !isNaN(d) ? true : false;
}
export const convertDateToString = (date) => {
    if (!isValidDate(date)) {
        return "";
    }

    let dia = date.getDate();
    let mes = date.getMonth() + 1;
    let ano = date.getFullYear();

    return `${ano}-${mes <= 9 ? `0${mes}` : mes}-${dia <= 9 ? `0${dia}` : dia}`;
}
export const convertDateStringToDate = (dateStr) => {
    let dateArr = dateStr ? dateStr.split('-') : [];
    if (dateArr.length === 3) {
        return new Date(dateArr[0], dateArr[1] - 1, dateArr[2])
    } else {
        return null;
    }
}

export const isNumber = (num) => {
    return !isNaN(parseInt(num)) && isFinite(num);
}

export const getMeta = (metaName) => {
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
        }
    }

    return '';
}