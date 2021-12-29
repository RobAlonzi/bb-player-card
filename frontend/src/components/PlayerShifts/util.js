export function findAverageShiftLength(shifts) {
  const totalSeconds = shifts.reduce((total, shift) => total + convertStringToSeconds(shift.shift.duration), 0);

  if(!totalSeconds) {
    return '00:00'
  }

  return convertSecondsToStringMinutes(Math.round(totalSeconds / shifts.length));
}

export function findLongestShiftLength(shifts) {
  if(!shifts.length) {
    return '00:00'
  }

  const sortedShifts = sortShiftsByDuration(shifts)
  return sortedShifts[0].shift.duration;
}

export function findMedianShiftLength(shifts) {
  if(!shifts.length) {
    return '00:00'
  }

  const middleIdx = Math.floor(shifts.length / 2)
  const sortedShifts = sortShiftsByDuration(shifts);

  return sortedShifts[middleIdx].shift.duration
}

export function findStartingLineupOccurances(shifts) {
  const starting = shifts.filter(shift => shift.shift.period === 1 && shift.shift.startTime === "00:00")
  return starting.length;
}

export function findFinalShiftOccurances(shifts) {
  const final = shifts.filter(shift => shift.shift.period === 3 && shift.shift.endTime === "20:00")
  return final.length;
}

export function groupToiByPeriod(shifts) {
  const periods = {};

  for(const shift of shifts) {
    const name = shift.shift.period;

    if(periods[name]) {
      periods[name] += convertStringToSeconds(shift.shift.duration)
      continue;
    }

    periods[name] = convertStringToSeconds(shift.shift.duration);

  }

  return Object.entries(periods).map(([key, value]) => ({
    type: key,
    'Time on Ice': value,
  }))
}

export function formatShiftForLog(shift) {
  return {
    date: shift.date,
    team: shift.teams.team.name,
    opponent: shift.teams.opponent.name,
    number: shift.shift.shiftNumber,
    period: shift.shift.period,
    startTime: shift.shift.startTime,
    endTime: shift.shift.endTime,
    duration: shift.shift.duration
  }
}

function convertStringToSeconds(toi) {
  const [minutes, seconds] = toi.split(':');
  return (Number(minutes) * 60) + Number(seconds);
}

export function convertSecondsToStringMinutes(time) {
  const minutes = Math.floor(time / 60);
  const seconds = time - (minutes * 60);

  return `${String(minutes).length === 1 ? `0${minutes}` : minutes}:${String(seconds).length === 1 ? `0${seconds}` : seconds}`;
}

function sortShiftsByDuration(shifts) {
  return [...shifts].sort((a, b) => {
    const aSeconds = convertStringToSeconds(a.shift.duration);
    const bSeconds = convertStringToSeconds(b.shift.duration);

    if(aSeconds > bSeconds) {
      return -1;
    }

    if(bSeconds > aSeconds) {
      return 1;
    }

    return 0;
  })
}