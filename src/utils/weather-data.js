const windData = [
  {
    time: 1,
    speed: 10.14,
    deg: 250.188,
  },
  {
    time: 2,
    speed: 10.51,
    deg: 252,
  },
  {
    time: 3,
    speed: 10.96,
    deg: 255,
  },
  {
    time: 4,
    speed: 10.76,
    deg: 256,
  },
  {
    time: 5,
    speed: 10.07,
    deg: 255,
  },
  {
    time: 6,
    speed: 10.11,
    deg: 249,
  },
  {
    time: 7,
    speed: 10.22,
    deg: 247,
  },
  {
    time: 8,
    speed: 9.86,
    deg: 244,
  },
  {
    time: 9,
    speed: 10.22,
    deg: 245,
  },
  {
    time: 10,
    speed: 9.09,
    deg: 249,
  },
  {
    time: 11,
    speed: 8.76,
    deg: 249,
  },
  {
    time: 12,
    speed: 8.5,
    deg: 248,
  },
]

const weatherData = [
  {
    time: 1,
    pressure: 500,
    temp: 288,
  },
  {
    time: 2,
    pressure: 500,
    temp: 288,
  },
  {
    time: 3,
    pressure: 500,
    temp: 287,
  },
  {
    time: 4,
    pressure: 500,
    temp: 287,
  },
  {
    time: 5,
    pressure: 500,
    temp: 287,
  },
  {
    time: 6,
    pressure: 500,
    temp: 288,
  },
]

function getRandomInt(num) {
  const min = -num
  const max = num + 1
  return Math.floor(Math.random() * (max - min)) + min
}

function getWeatherData() {
  weatherData.shift()
  const last = weatherData[weatherData.length - 1]
  let pressure = last.pressure + getRandomInt(2)
  if (pressure > 600) {
    pressure = 600
  }

  weatherData.push({
    pressure,
    temp: last.temp + getRandomInt(5),
    time: (last.time + 1) % 24,
  })

  return weatherData
}

function getWindData() {
  windData.shift()
  const last = windData[windData.length - 1]
  let newSpeed = last.speed + getRandomInt(5)
  if (newSpeed > 200) {
    newSpeed = 200
  }

  windData.push({
    deg: Math.abs((last.deg + getRandomInt(10)) % 360),
    speed: Math.abs(newSpeed),
    time: (last.time + 1) % 24,
  })

  return windData[0]
}

export { getWeatherData, getWindData }
