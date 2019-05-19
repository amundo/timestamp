import {secondsToTimestamp, timestampToSeconds} from './timestamps.js'
import {assert} from './assert.js'

let seconds = [
  [1,                           '00:00:01.000'],
  [8.52,                        '00:00:08.520'],
  [1.5,                         '00:00:01.500'],
  [60,                          '00:01:00.000'],
  [60 + 60 + 30 + .225,         '00:02:30.225'],
  [3600 + 60 + 60 + 30 + .225,  '01:02:30.225'],
  //[10000000000,  '01:02:30.225']
]

let timestamps = [
  [   '123',                       123         ],
  [   '01:03',                      63         ],
  [   '00:01',                      1          ],
  [   '00:01.000',                  1          ],
  ['00:00:01.000',                  1          ],
  ['00:00:08.520',                  8.52       ],
  ['00:00:01.500',                  1.5        ],
  ['00:01:00.000',                  60         ],
  ['00:02:30.225',        60 + 60 + 30 + .225  ],
  ['01:02:30.225', 3600 + 60 + 60 + 30 + .225  ],
  //[10000000000,  '01:02:30.225']
]

seconds.forEach(([seconds, timestamp]) => {
  assert(
    `The timestamp of ${seconds} should be ${timestamp} (was ${secondsToTimestamp(seconds)})`,
    secondsToTimestamp(seconds) == timestamp
  )
})

timestamps.forEach(([timestamp, seconds]) => {
  assert(
    `The seconds for ${timestamp} should be ${seconds} (was ${timestampToSeconds(timestamp)})`,
    timestampToSeconds(timestamp) == seconds
  )
})
