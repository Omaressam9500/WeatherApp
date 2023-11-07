import { IForeCastDays } from "../hooks/interfaces";

const moment = require('moment');

export const getNext5Hours = (foreCastDays:Array<IForeCastDays>) => {

    const mergedArray = foreCastDays.length > 1 ? [...foreCastDays[0].hour, ...foreCastDays[1].hour] : [...foreCastDays[0].hour]
    const currentHour = moment().format('HH');
    const currentIndex = mergedArray.findIndex((hour) => currentHour === moment(hour.time).format('HH'));
    return mergedArray.slice(currentIndex + 1, currentIndex + 6)
}

export const checkDays = () => {
    return moment().format('HH') > 19 ? 2 : 1;
}