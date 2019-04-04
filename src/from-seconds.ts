const SECONDS_IN_ONE_MINUTE = 60;
const SECONDS_IN_HOUR = 60 * SECONDS_IN_ONE_MINUTE; // 3600;
const SECONDS_IN_ONE_DAY = 24 * SECONDS_IN_HOUR; // 86400;
const SECONDS_IN_ONE_MONTH = 30.439814814814813 * SECONDS_IN_ONE_DAY; // 2630000
const SECONDS_IN_ONE_YEAR = 12 * SECONDS_IN_ONE_MONTH; // 31536000

interface ConvertApiInterface {
    toYears: Function;
    toMonths: Function;
    toDays: Function;
    toHours: Function;
    toMinutes: Function;
}

interface ParsedSecondsToTimeInterface {
    years?: number;
    months?: number;
    days?: number;
    hours?: number;
    minutes?: number;
    seconds: number;
}

export function fromSeconds(value: string | number): ConvertApiInterface {
    const seconds = Number.parseInt(String(value), 10);

    if (Number.isNaN(seconds)) {
        throw new TypeError('Invalid value to convert');
    }

    return {
        toMinutes: () => parseSecondsToMinutes(seconds),
        toHours: () => parseSecondsToHours(seconds),
        toDays: () => parseSecondsToDays(seconds),
        toMonths: () => parseSecondsToMonths(seconds),
        toYears: () => parseSecondsToYears(seconds),
    };
}

function parseSecondsToMinutes(s: number) {
    const minutes = Math.floor(s / SECONDS_IN_ONE_MINUTE);
    const seconds = Math.floor(s % SECONDS_IN_ONE_MINUTE);

    return {
        minutes,
        seconds,
    };
}

function parseSecondsToHours(s: number): ParsedSecondsToTimeInterface {
    const hours = Math.floor(s / SECONDS_IN_HOUR);
    const minutes = Math.floor(s % SECONDS_IN_HOUR / SECONDS_IN_ONE_MINUTE);
    const seconds = Math.floor(s % SECONDS_IN_ONE_MINUTE);

    return {
        hours,
        minutes,
        seconds,
    };
}

function parseSecondsToDays(s: number): ParsedSecondsToTimeInterface {
    const days = Math.floor(s / SECONDS_IN_ONE_DAY);
    const hours = Math.floor(s % SECONDS_IN_ONE_DAY / SECONDS_IN_HOUR);
    const minutes = Math.floor(s % SECONDS_IN_HOUR / SECONDS_IN_ONE_MINUTE);
    const seconds = Math.floor(s % SECONDS_IN_ONE_MINUTE);

    return {
        days,
        hours,
        minutes,
        seconds,
    };
}

function parseSecondsToMonths(s: number): ParsedSecondsToTimeInterface {
    const months = Math.floor(s / SECONDS_IN_ONE_MONTH);
    const days = Math.floor(s % SECONDS_IN_ONE_MONTH / SECONDS_IN_ONE_DAY);
    const hours = Math.floor(s % SECONDS_IN_ONE_DAY / SECONDS_IN_HOUR);
    const minutes = Math.floor(s % SECONDS_IN_HOUR / SECONDS_IN_ONE_MINUTE);
    const seconds = Math.floor(s % SECONDS_IN_ONE_MINUTE);

    return {
        months,
        days,
        hours,
        minutes,
        seconds,
    };
}

function parseSecondsToYears(s: number): ParsedSecondsToTimeInterface {
    const years = Math.floor(s / SECONDS_IN_ONE_YEAR);
    const months = Math.floor(s % SECONDS_IN_ONE_YEAR / SECONDS_IN_ONE_MONTH);
    const days = Math.floor(s % SECONDS_IN_ONE_MONTH / SECONDS_IN_ONE_DAY);
    const hours = Math.floor(s % SECONDS_IN_ONE_DAY / SECONDS_IN_HOUR);
    const minutes = Math.floor(s % SECONDS_IN_HOUR / SECONDS_IN_ONE_MINUTE);
    const seconds = Math.floor(s % SECONDS_IN_ONE_MINUTE);

    return {
        years,
        months,
        days,
        hours,
        minutes,
        seconds,
    };
}
