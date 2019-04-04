# from-seconds
Convert seconds to minutes, hours, days, months, years...

## Install

```
$ npm install from-seconds
```

## Usage

Pass in seconds (as a `number` or `string`), and get an object:

```js
import { fromSeconds } from 'from-seconds';

const result = fromSeconds(31503661);
result.toMinutes();
// => { minutes: 525061, seconds: 1 }
result.toHours();
// => { hours: 8751, minutes: 1, seconds: 1 }
result.toDays();
// => { days: 364, hours: 15, minutes: 1, seconds: 1 }
result.toMonths();
// => { months: 11, days: 29, hours: 15, minutes: 1, seconds: 1 }
result.toYears();
// => { years: 0, months: 11, days: 29, hours: 15, minutes: 1, seconds:1 }
```

## License

[The MIT License](https://rendfall.mit-license.org) @ 2019
