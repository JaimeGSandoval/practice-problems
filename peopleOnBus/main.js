// NUMBER OF PEOPLE ON BUS

// You are provided with a list (or array) of integer arrays (or tuples). Each integer array has two items which represent number of people get into bus (The first item) and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after the last bus station (after the last array). Even though it is the last bus stop, the bus is not empty and some people are still in the bus, and they are probably sleeping there

const number = (busStops) => {
  const amountOnBus = busStops.reduce((acc, curr) => (acc += curr[0]), 0);
  const amountOffBus = busStops.reduce((acc, curr) => (acc += curr[1]), 0);
  return amountOnBus - amountOffBus;
};

const number2 = (busStops) =>
  busStops.reduce((people, stop) => people + stop[0] - stop[1], 0);
