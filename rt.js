const today = new Date();

const calc = delta => {
  delta = Math.abs(delta) / 1000;

  const day = Math.floor(delta / 86400);
  delta -= day * 86400;

  const hour = Math.floor(delta / 3600) % 24;
  delta -= hour * 3600;

  const minute = Math.floor(delta / 60) % 60;
  delta -= minute * 60;

  const second = delta % 60;

  return {
    day: Math.floor(day),
    hour: Math.floor(hour),
    minute: Math.floor(minute),
    second: Math.floor(second),
  };
};

const remainingTime = {
  s: s => {
    var end = new Date();
    end.setTime(today.getTime() + s * 1000);

    return calc(end - new Date());
  },

  m: m => {
    var end = new Date();
    end.setTime(today.getTime() + m * 60 * 1000);

    return calc(end - new Date());
  },

  h: h => {
    var end = new Date();
    end.setTime(today.getTime() + h * 60 * 60 * 1000);

    return calc(end - new Date());
  },

  d: d => {
    var end = new Date();
    end.setTime(today.getTime() + d * 24 * 60 * 60 * 1000);

    return calc(end - new Date());
  },
};

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = remainingTime;
} else {
  window.remainingTime = remainingTime;
}
