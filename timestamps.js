let secondsToTimestamp = seconds => new Date(seconds * 1000)
  .toISOString()
  .slice(11, -1)

let timestampToSeconds = timestamp => timestamp
    .split(':')
    .reduce((total, time) => 
       (60 * total) + parseFloat(time), 
    0)

export {secondsToTimestamp, timestampToSeconds}
