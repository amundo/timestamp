/*

The timestamps must be in one of two formats:

    mm:ss.ttt
    hh:mm:ss.ttt

Where the components are defined as follows:

    hh is hours.
        Must be at least two digits.
        Hours can be greater than two digits (e.g., 9999:00:00.000).
    mm is minutes.
        Must be between 00 and 59 inclusive.
    ss is seconds.
        Must be between 00 and 59 inclusive.
    ttt is miliseconds.
        Must be between 000 and 999 inclusive.

*/

let secondsToTimestamp = seconds => {
  let datetime =  new Date(seconds * 1000).toISOString()
  // datetime looks like: 1970-01-01T00:00:08.230Z
  let timestamp = datetime.slice(11, -1)
  return timestamp
}

let timestampToSeconds = timestamp => {
  return timestamp
    .split(':')
    .reduce((acc,time) => (60 * acc) + +time, 0)
}

export {secondsToTimestamp, timestampToSeconds}
