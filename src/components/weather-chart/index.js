import React from 'react'

import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts'

import {getWeatherData} from '../../utils/weather-data'

import './styles.scss'

class WeatherChart extends React.Component {
  state = {
    data : getWeatherData()
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        data: getWeatherData()
      })
    }, 1000)
  }

  render() {
    const {data} = this.state;

    return (
      <LineChart
        className="weather-chart"
        width={300}
        height={200}
        data={data}
        margin={{top: 5, right: 5, left: 5, bottom: 5}}
      >
        <CartesianGrid strokeDasharray="3 3"/>
        <XAxis dataKey="time"/>
        <YAxis yAxisId="left" domain={['dataMin - 50', 'dataMax + 50']} />
        <YAxis yAxisId="right" domain={['dataMin - 50', 'dataMax + 50']} orientation="right" />
        <Tooltip />
        <Legend />
        <Line yAxisId="left" type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{r: 8}}/>
        <Line yAxisId="right" type="monotone" dataKey="humidity" stroke="#82ca9d" />
      </LineChart>
    )
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }
}

export default WeatherChart;