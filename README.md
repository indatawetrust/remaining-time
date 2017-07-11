# remaining time
[![Travis Build
Status](https://img.shields.io/travis/indatawetrust/remaining-time.svg)](https://travis-ci.org/indatawetrust/remaining-time)

```js
import rt from 'remaining-time'

// second
rt.s(65)

Object {
  "day": 0,
  "hour": 0,
  "minute": 1,
  "second": 5
}

// minute
rt.m(61)

Object {
  "day": 0,
  "hour": 1,
  "minute": 1,
  "second": 0
}

// hour
rt.h(25)

Object {
  "day": 1,
  "hour": 1,
  "minute": 0,
  "second": 0
}

// day
rt.d(5)

Object {
  "day": 5,
  "hour": 0,
  "minute": 0,
  "second": 0
}

// date
rt.date(new Date().getTime()+64000)

Object {
  "day": 0,
  "hour": 0,
  "minute": 1,
  "second": 4
}
```

